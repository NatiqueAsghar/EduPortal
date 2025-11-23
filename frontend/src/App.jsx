import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";
import Class from "./pages/Class";
import ClassAnalytics from "./pages/ClassAnalytics";
import AddStudent from "./pages/AddStudent";
import AddClass from "./pages/AddClass";
import AddTeacher from "./pages/AddTeacher";
import ProfitAnalysis from "./pages/ProfitAnalysis";
import UpdateFormPage from "./pages/UpdateFormPage";
import { checkAuth } from "./utils/authUtils";
import Loading from "./components/Loading";

export default function App() {
  const dispatch = useDispatch();

  const [authLoading, setAuthLoading] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const initializeAuth = async (retryCount = 0) => {
      try {
        const isAuthenticated = await checkAuth(dispatch);

        if (!isAuthenticated && retryCount < 2) {
          setTimeout(() => initializeAuth(retryCount + 1), 500);
          return;
        }
      } catch (err) {
        // Retry if network error
        if (retryCount < 2) {
          setTimeout(() => initializeAuth(retryCount + 1), 500);
          return;
        }
      }

      setAuthLoading(false);
      setAuthChecked(true);
    };

    initializeAuth();
  }, [dispatch]);

  // Show loading while checking authentication
  if (authLoading || !authChecked) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <Loading />
        <div className="text-lg text-gray-700">Verifying your account...</div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/class" element={<Class />} />
          <Route path="/class/add-class" element={<AddClass />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/teacher/add-teacher" element={<AddTeacher />} />
          <Route path="/student" element={<Student />} />
          <Route path="/student/add-student" element={<AddStudent />} />
          <Route path="/class-analytics/:name" element={<ClassAnalytics />} />
          <Route path="/profit-analysis" element={<ProfitAnalysis />} />
          <Route path="/:model/update/:id" element={<UpdateFormPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
