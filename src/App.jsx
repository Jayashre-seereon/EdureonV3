import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { AppSidebar } from "./components/app-sidebar";
import { MobileBottomNav } from "./components/mobile-bottom-nav";
import { Toaster } from "./components/ui/sonner";
import { SidebarProvider } from "./components/ui/sidebar";
import { Topbar } from "./components/topbar";
import { useAuth } from "./lib/auth";
import { appRoutes } from "./routes";

const publicPaths = ["/login", "/signup", "/forgot-password"];

function AppLayout() {
  const { user, ready } = useAuth();
  const { pathname } = useLocation();
  const isPublic = publicPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );

  if (isPublic) {
    return (
      <>
        <Outlet />
        <Toaster />
      </>
    );
  }

  if (!ready) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar />
          <main className="min-w-0 flex-1 pb-16 md:pb-0">
            <Outlet />
          </main>
        </div>
        <MobileBottomNav />
      </div>
      <Toaster />
    </SidebarProvider>
  );
}

function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin" />
        Loading workspace...
      </div>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-semibold gradient-text">
          404
        </h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {appRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
