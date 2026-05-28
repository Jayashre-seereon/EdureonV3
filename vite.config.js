// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

function stripRouteTreeTypes() {
  let routeTreePath = resolve(process.cwd(), "src/routeTree.gen.js");
  const stripTypes = (code) =>
    code.replace(/\nimport type \{ getRouter \}[\s\S]*$/, "\n");

  function cleanRouteTreeFile() {
    if (!existsSync(routeTreePath)) return;
    const code = readFileSync(routeTreePath, "utf8");
    const cleaned = stripTypes(code);
    if (cleaned !== code) {
      writeFileSync(routeTreePath, cleaned);
    }
  }

  return {
    name: "strip-route-tree-types",
    enforce: "pre",
    configResolved(config) {
      routeTreePath = resolve(config.root, "src/routeTree.gen.js");
      cleanRouteTreeFile();
    },
    buildStart() {
      cleanRouteTreeFile();
    },
    configureServer(server) {
      cleanRouteTreeFile();
      server.watcher.on("change", (file) => {
        if (resolve(file) === routeTreePath) {
          cleanRouteTreeFile();
        }
      });
    },
    transform(code, id) {
      if (!id.endsWith("routeTree.gen.js")) return null;
      return {
        code: stripTypes(code),
        map: null,
      };
    },
  };
}

// Redirect TanStack Start's bundled server entry to src/server.js (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    router: {
      generatedRouteTree: "routeTree.gen.js",
      disableTypes: true,
    },
    server: { entry: "server" },
  },
  vite: {
    plugins: [stripRouteTreeTypes(), nitro()],
  },
});
