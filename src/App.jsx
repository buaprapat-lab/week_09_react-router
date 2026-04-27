import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

// กำหนด router ข้อมูลจะอยู่ใน array ที่เก็บ object
const router = createBrowserRouter([
  {
    // ต้องมีคอมม่า (,) หลังจบแต่ละ property
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        elememt: <Home />,
      },
      {
        path: "about",
        element: <Home />,
      },
    ],
  }, // ปิด object ให้เรียบร้อย
]); // ปิด array และ function ให้ถูกต้อง

export default function App() {
  return <RouterProvider router={router} />;
}
