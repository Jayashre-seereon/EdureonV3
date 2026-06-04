import AccountPage from "./pages/account/account";
import AdminAdmissionsPage from "./pages/admin/admissions/admin.admissions";
import AdminAdmissionDetailPage from "./pages/admin/admissions/admin.admissions.$id";
import AdminAssetsPage from "./pages/admin/admin.assets";
import AdminAuditPage from "./pages/admin/admin.audit";
import AdminDmsPage from "./pages/admin/admin.dms";
import AdminExpensesPage from "./pages/admin/admin.expenses";
import AdminInfrastructurePage from "./pages/admin/admin.infrastructure";
import AnalyticsPage from "./pages/analytics";
import AssignmentDetailPage from "./pages/admin/assignments.$id";
import AssignmentsPage from "./pages/admin/assignments";
import AttendancePage from "./pages/admin/attendance";
import ClassDetailPage from "./pages/admin/classes.$id";
import ClassesPage from "./pages/admin/classes";
import CommunicationPage from "./pages/communication";
import EmployeesPage from "./pages/employees";
import ExamDetailPage from "./pages/admin/exams.$id";
import ExamsPage from "./pages/admin/exams";
import FeesPage from "./pages/fees";
import ForgotPasswordPage from "./pages/auth/forgot-password";
import HostelPage from "./pages/hostel";
import DashboardPage from "./pages/index";
import LibraryPage from "./pages/library";
import LoginPage from "./pages/auth/login";
import NotificationsPage from "./pages/notifications";
import ParentChildDetailPage from "./pages/parent.children.$id";
import ParentChildrenPage from "./pages/parent.children";
import ParentDashboardPage from "./pages/parent.dashboard";
import ParentsPage from "./pages/parents";
import PayrollPage from "./pages/payroll";
import ProfilePage from "./pages/account/profile";
import RolesPage from "./pages/roles/roles";
import SettingsPage from "./pages/account/settings";
import SignupPage from "./pages/auth/signup";
import StudentAssignmentsPage from "./pages/students/student.assignments";
import StudentAttendancePage from "./pages/students/student.attendance";
import StudentDashboardPage from "./pages/students/student.dashboard";
import StudentFeesPage from "./pages/students/student.fees";
import StudentLibraryPage from "./pages/students/student.library";
import StudentMaterialsPage from "./pages/students/student.materials";
import StudentNoticesPage from "./pages/students/student.notices";
import StudentResultsPage from "./pages/students/student.results";
import StudentTimetablePage from "./pages/students/student.timetable";
import StudentDetailPage from "./pages/students/students.$id";
import StudentsPage from "./pages/admin/students";
import SubjectDetailPage from "./pages/subjects.$id";
import SuperBillingPage from "./pages/super.billing";
import SuperInstituteDetailPage from "./pages/institutes/super.institutes.$id";
import SuperInstitutesPage from "./pages/institutes/super.institutes.index";
import SuperInstituteNewPage from "./pages/institutes/super.institutes.new";
import SuperUsersPage from "./pages/super.users";
import TeacherAttendancePage from "./pages/teacher/teacher.attendance";
import TeacherClassesPage from "./pages/teacher/teacher.classes";
import TeacherDashboardPage from "./pages/teacher/teacher.dashboard";
import TeacherLeavePage from "./pages/teacher/teacher.leave";
import TeacherLessonPlanDetailPage from "./pages/teacher/lesson-plans/teacher.lesson-plans.$id";
import TeacherLessonPlansPage from "./pages/teacher/lesson-plans/teacher.lesson-plans";
import TeacherMaterialDetailPage from "./pages/teacher/materials/teacher.materials.$id";
import TeacherMaterialsPage from "./pages/teacher/materials/teacher.materials";
import TeacherNoticesPage from "./pages/teacher/teacher.notices";
import TimetablePage from "./pages/timetable";
import TransportPage from "./pages/transport";

export const appRoutes = [
  { path: "/", element: <DashboardPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/admin/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> },
  { path: "/account", element: <AccountPage /> },
  { path: "/analytics", element: <AnalyticsPage /> },
  { path: "/attendance", element: <AttendancePage /> },
  { path: "/communication", element: <CommunicationPage /> },
  { path: "/employees", element: <EmployeesPage /> },
  { path: "/fees", element: <FeesPage /> },
  { path: "/hostel", element: <HostelPage /> },
  { path: "/library", element: <LibraryPage /> },
  { path: "/notifications", element: <NotificationsPage /> },
  { path: "/parents", element: <ParentsPage /> },
  { path: "/payroll", element: <PayrollPage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/roles", element: <RolesPage /> },
  { path: "/settings", element: <SettingsPage /> },
  { path: "/timetable", element: <TimetablePage /> },
  { path: "/transport", element: <TransportPage /> },

  { path: "/admin/admissions", element: <AdminAdmissionsPage /> },
  { path: "/admin/admissions/:id", element: <AdminAdmissionDetailPage /> },
  { path: "/admin/assets", element: <AdminAssetsPage /> },
  { path: "/admin/audit", element: <AdminAuditPage /> },
  { path: "/admin/dms", element: <AdminDmsPage /> },
  { path: "/admin/expenses", element: <AdminExpensesPage /> },
  { path: "/admin/infrastructure", element: <AdminInfrastructurePage /> },

  { path: "/assignments", element: <AssignmentsPage /> },
  { path: "/assignments/:id", element: <AssignmentDetailPage /> },
  { path: "/classes", element: <ClassesPage /> },
  { path: "/classes/:id", element: <ClassDetailPage /> },
  { path: "/exams", element: <ExamsPage /> },
  { path: "/exams/:id", element: <ExamDetailPage /> },
  { path: "/students", element: <StudentsPage /> },
  { path: "/students/:id", element: <StudentDetailPage /> },
  { path: "/subjects/:id", element: <SubjectDetailPage /> },

  { path: "/parent/dashboard", element: <ParentDashboardPage /> },
  { path: "/parent/children", element: <ParentChildrenPage /> },
  { path: "/parent/children/:id", element: <ParentChildDetailPage /> },

  { path: "/student/dashboard", element: <StudentDashboardPage /> },
  { path: "/student/timetable", element: <StudentTimetablePage /> },
  { path: "/student/attendance", element: <StudentAttendancePage /> },
  { path: "/student/assignments", element: <StudentAssignmentsPage /> },
  { path: "/student/results", element: <StudentResultsPage /> },
  { path: "/student/materials", element: <StudentMaterialsPage /> },
  { path: "/student/notices", element: <StudentNoticesPage /> },
  { path: "/student/fees", element: <StudentFeesPage /> },
  { path: "/student/library", element: <StudentLibraryPage /> },

  { path: "/super/institutes", element: <SuperInstitutesPage /> },
  { path: "/super/institutes/new", element: <SuperInstituteNewPage /> },
  { path: "/super/institutes/:id", element: <SuperInstituteDetailPage /> },
  { path: "/super/users", element: <SuperUsersPage /> },
  { path: "/super/billing", element: <SuperBillingPage /> },

  { path: "/teacher/dashboard", element: <TeacherDashboardPage /> },
  { path: "/teacher/classes", element: <TeacherClassesPage /> },
  { path: "/teacher/attendance", element: <TeacherAttendancePage /> },
  { path: "/teacher/leave", element: <TeacherLeavePage /> },
  { path: "/teacher/lesson-plans", element: <TeacherLessonPlansPage /> },
  {
    path: "/teacher/lesson-plans/:id",
    element: <TeacherLessonPlanDetailPage />,
  },
  { path: "/teacher/materials", element: <TeacherMaterialsPage /> },
  { path: "/teacher/materials/:id", element: <TeacherMaterialDetailPage /> },
  { path: "/teacher/notices", element: <TeacherNoticesPage /> },
];
