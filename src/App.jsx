import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// pages
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Subject from "./pages/Subject";
import Myprofile from "./pages/Myprofile";
import Users from "./pages/Users";
import CheckClass from "./pages/CheckClass";
import StudentAttendanceDetail from "./pages/ClassDetail";
import StdCheckClass from "./pages/StdCheckClass";
import ProfessorProfile from "./pages/TeacherProfile";

// ==============================
// Protected Route
// ==============================
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// ==============================
// 404 Page
// ==============================
const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>404</h1>
      <p>Page Not Found</p>
    </div>
  );
};

// ==============================
// App Router
// ==============================
function App() {
  return (
    <Router>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Register */}
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Subject CRUD */}
        <Route
          path="/crud/subject"
          element={
            <ProtectedRoute>
              <Subject />
            </ProtectedRoute>
          }
        />

        {/* My Profile */}
        <Route
          path="/my-profile"
          element={
            <ProtectedRoute>
              <Myprofile />
            </ProtectedRoute>
          }
        />

        {/* Users */}
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />

        {/* Check Class */}
        <Route
          path="/check-class/:classId"
          element={
            <ProtectedRoute>
              <CheckClass />
            </ProtectedRoute>
          }
        />

        {/* Class Detail */}
        <Route
          path="/class-detail/:classId/:stdId"
          element={
            <ProtectedRoute>
              <StudentAttendanceDetail />
            </ProtectedRoute>
          }
        />

        {/* Student Check Class */}
        <Route
          path="/check-manual/:classId/:stdId"
          element={
            <ProtectedRoute>
              <StdCheckClass />
            </ProtectedRoute>
          }
        />

        {/* Teacher Profile */}
        <Route
          path="/teacher-profile"
          element={
            <ProtectedRoute>
              <ProfessorProfile />
            </ProtectedRoute>
          }
        />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;