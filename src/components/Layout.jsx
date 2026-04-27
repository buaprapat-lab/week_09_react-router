import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div className="bg-green-500">Navbar</div>
      <div className="bg-purple-500">
        <Outlet />
      </div>
    </div>
  );
}
