import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "/src/assets/img/logo-jk.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      setUserRole(user.role);
    } else {
      setIsLoggedIn(false);
      setUserRole("");
    }
  }, []);

  const handleNavigate = () => {
    if (userRole === "perusahaan") {
      navigate("/perusahaan/profil");
    } else if (userRole === "disabilitas") {
      navigate("/disabilitas/profil");
    }
  };

  return (
    <header className="bg-white z-50 px-8 border-b border-gray-100 fixed top-0 w-full">
      <nav className="flex justify-between items-center py-4 md:mx-12">
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo Jembatan Karir"
              className="w-12 md:w-12"
            />
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <Link to="/cari-lowongan" className="hover:text-[#55BACC]">
            Cari Lowongan Kerja
          </Link>
          <Link to="/cari-freelancer" className="hover:text-[#55BACC]">
            Cari Freelancer
          </Link>
          <Link to="/cari-perusahaan" className="hover:text-[#55BACC]">
            Cari Perusahaan
          </Link>
          <a
            href="https://wa.me/6282246805359"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#55BACC]"
          >
            Bantuan
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <button
              onClick={handleNavigate}
              className="bg-[#55BACC] text-white px-5 py-2 rounded-full text-sm hover:bg-[#4DA7B8]"
            >
              Dashboard
            </button>
          ) : (
            <>
              <Link
                to="/pilih-akun"
                className="rounded-full px-5 py-2 text-sm font-medium hover:text-[#55BACC]"
              >
                Daftar
              </Link>
              <Link
                to="/login"
                className="bg-[#55BACC] text-white px-5 py-2 rounded-full text-sm hover:bg-[#4DA7B8]"
              >
                Masuk
              </Link>
            </>
          )}
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2">
          <Link
            to="/cari-lowongan"
            className="block text-gray-700 hover:text-[#55BACC]"
          >
            Cari Lowongan Kerja
          </Link>
          <Link
            to="/cari-freelancer"
            className="block text-gray-700 hover:text-[#55BACC]"
          >
            Cari Freelancer
          </Link>
          <Link
            to="/cari-perusahaan"
            className="block text-gray-700 hover:text-[#55BACC]"
          >
            Cari Perusahaan
          </Link>
          <a
            href="https://wa.me/6282246805359"
            target="_blank"
            rel="noreferrer"
            className="block text-gray-700 hover:text-[#55BACC]"
          >
            Bantuan
          </a>
          {isLoggedIn ? (
            <button
              onClick={handleNavigate}
              className="block bg-[#55BACC] text-white px-4 py-2 rounded text-center"
            >
              Dashboard
            </button>
          ) : (
            <>
              <Link
                to="/pilih-akun"
                className="block text-gray-700 px-4 py-2 text-center hover:text-[#55BACC]"
              >
                Daftar
              </Link>
              <Link
                to="/login"
                className="block bg-[#55BACC] text-white px-4 py-2 rounded text-center hover:bg-[#4DA7B8]"
              >
                Masuk
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
