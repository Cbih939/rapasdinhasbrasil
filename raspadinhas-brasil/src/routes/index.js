// src/routes/index.js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import UserDashboard from '../pages/UserDashboard';
import AdminDashboard from '../pages/AdminDashboard'; // 1. Importe

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/minha-conta', element: <UserDashboard /> },
  { path: '/admin', element: <AdminDashboard /> }, // 2. Adicione a rota
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}