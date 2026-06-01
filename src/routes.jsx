import AccountPage from "./routes/account";
import AdminAdmissionsPage from "./routes/admin.admissions";
import AdminAdmissionDetailPage from "./routes/admin.admissions.$id";
import AdminAssetsPage from "./routes/admin.assets";
import AdminAuditPage from "./routes/admin.audit";
import AdminDmsPage from "./routes/admin.dms";
import AdminExpensesPage from "./routes/admin.expenses";
import AdminInfrastructurePage from "./routes/admin.infrastructure";
import AnalyticsPage from "./routes/analytics";
import AssignmentDetailPage from "./routes/assignments.$id";
import AssignmentsPage from "./routes/assignments";
import AttendancePage from "./routes/attendance";
import ClassDetailPage from "./routes/classes.$id";
import ClassesPage from "./routes/classes";
import CommunicationPage from "./routes/communication";
import EmployeesPage from "./routes/employees";
import ExamDetailPage from "./routes/exams.$id";
import ExamsPage from "./routes/exams";
import FeesPage from "./routes/fees";
import ForgotPasswordPage from "./routes/forgot-password";
import HostelPage from "./routes/hostel";
import DashboardPage from "./routes/index";
import LibraryPage from "./routes/library";
import LoginPage from "./routes/login";
import NotificationsPage from "./routes/notifications";
import ParentChildDetailPage from "./routes/parent.children.$id";
import ParentChildrenPage from "./routes/parent.children";
import ParentDashboardPage from "./routes/parent.dashboard";
import ParentsPage from "./routes/parents";
import PayrollPage from "./routes/payroll";
import ProfilePage from "./routes/profile";
import RolesPage from "./routes/roles";
import SettingsPage from "./routes/settings";
import SignupPage from "./routes/signup";
import StudentAssignmentsPage from "./routes/student.assignments";
import StudentAttendancePage from "./routes/student.attendance";
import StudentDashboardPage from "./routes/student.dashboard";
import StudentFeesPage from "./routes/student.fees";
import StudentLibraryPage from "./routes/student.library";
import StudentMaterialsPage from "./routes/student.materials";
import StudentNoticesPage from "./routes/student.notices";
import StudentResultsPage from "./routes/student.results";
import StudentTimetablePage from "./routes/student.timetable";
import StudentDetailPage from "./routes/students.$id";
import StudentsPage from "./routes/students";
import SubjectDetailPage from "./routes/subjects.$id";
import SuperBillingPage from "./routes/super.billing";
import SuperInstituteDetailPage from "./routes/super.institutes.$id";
import SuperInstitutesPage from "./routes/super.institutes.index";
import SuperInstituteNewPage from "./routes/super.institutes.new";
import SuperUsersPage from "./routes/super.users";
import TeacherAttendancePage from "./routes/teacher.attendance";
import TeacherClassesPage from "./routes/teacher.classes";
import TeacherDashboardPage from "./routes/teacher.dashboard";
import TeacherLeavePage from "./routes/teacher.leave";
import TeacherLessonPlanDetailPage from "./routes/teacher.lesson-plans.$id";
import TeacherLessonPlansPage from "./routes/teacher.lesson-plans";
import TeacherMaterialDetailPage from "./routes/teacher.materials.$id";
import TeacherMaterialsPage from "./routes/teacher.materials";
import TeacherNoticesPage from "./routes/teacher.notices";
import TimetablePage from "./routes/timetable";
import TransportPage from "./routes/transport";

export const appRoutes = [
  { path: "/", element: <DashboardPage /> },
  { path: "/login", element: <LoginPage /> },
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
