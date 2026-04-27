import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="bg-green-500">Navbar</div>
      <div className="p-6 max-w-4xl mx-auto w-full">
        <Outlet />
      </div>
    </div>
  );
}
