import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

// กำหนด router ข้อมูลจะอยู่ใน array ที่เก็บ object
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/", // main content render อยู่ที่หน้า Home เป็นหน้าแรกที่เจอ
        element: <Home />, // แก้ตรงนี้ (พิมพ์ element ให้ถูก)
      },
      {
        path: "about",
        element: <About />, // แก้ตรงนี้ (เปลี่ยนจาก Home เป็น About)
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
