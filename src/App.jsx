import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Specialties from "./pages/Specialties.jsx";
import SpecialtyForm from "./pages/SpecialtyForm.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/specialties/new" element={<SpecialtyForm />} />
        <Route path="/specialties/:id/edit" element={<SpecialtyForm />} />
      </Route>
    </Routes>
  );
}