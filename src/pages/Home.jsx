import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  //convention
  const handleNavigate = () => {
    navigate("/about");
  };

  return (
    <div className="text-center bg-blue-100 text-black p-4">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>

      {/* แบบที่ 1: ใช้ปุ่มกดแล้วรันฟังก์ชันเพื่อเปลี่ยนหน้า */}
      <button
        className="px-4 py-2 bg-teal-500 text-white rounded mb-4"
        onClick={handleNavigate}
      >
        Go to About
      </button>

      <br />

      {/* แบบที่ 2: ใช้ Link ครอบธรรมดาเหมือนแท็ก <a> */}
      <Link to="/about" className="text-blue-500 underline">
        Go to About
      </Link>
    </div>
  );
}
