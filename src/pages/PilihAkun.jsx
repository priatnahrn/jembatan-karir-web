import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Perusahaan from "/src/assets/img/klien-1.png";
import Disabilitas from "/src/assets/img/klien-2.png";

const PilihAkun = () => {
  const [role, setRole] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === "perusahaan") {
      navigate("/perusahaan/register");
    } else if (role === "disabilitas") {
      navigate("/disabilitas/register");
    } else {
      setShowModal(true); // Tampilkan modal jika belum pilih role
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Side Content */}
      <div className="md:w-1/2 bg-[#55ABCC] flex flex-col justify-center items-center text-center px-8 py-16 text-white">
        <h1 className="text-3xl font-bold font-custom mb-3">
          Selamat Datang Sobat Karir!
        </h1>
        <p className="text-base font-custom max-w-md">
          Sesuaikan referensi Anda untuk mendapatkan apa yang Anda inginkan.
        </p>
      </div>

      {/* Form Section */}
      <div className="md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-12 relative">
        <h1 className="text-xl md:text-2xl font-bold font-custom text-center mb-6 text-gray-800">
          Gabung sebagai mitra atau pencari kerja?
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Mitra */}
            <label
              htmlFor="perusahaan"
              className={`cursor-pointer flex-1 border border-gray-200 hover:shadow-lg transition p-5 rounded-lg flex flex-col justify-between ${
                role === "perusahaan" ? "ring-2 ring-[#55ABCC]" : ""
              }`}
            >
              <div className="flex justify-between items-center mb-3">
                <img src={Perusahaan} alt="Mitra Icon" className="h-10" />
                <input
                  type="radio"
                  id="perusahaan"
                  name="role"
                  value="perusahaan"
                  checked={role === "perusahaan"}
                  onChange={(e) => setRole(e.target.value)}
                  className="h-5 w-5 text-blue-500 focus:ring-blue-400"
                />
              </div>
              <p className="text-center font-custom text-sm md:text-base">
                Saya ingin mencari klien
              </p>
            </label>

            {/* Disabilitas */}
            <label
              htmlFor="disabilitas"
              className={`cursor-pointer flex-1 border border-gray-200 hover:shadow-lg transition p-5 rounded-lg flex flex-col justify-between ${
                role === "disabilitas" ? "ring-2 ring-[#55ABCC]" : ""
              }`}
            >
              <div className="flex justify-between items-center mb-3">
                <img src={Disabilitas} alt="Pekerja Icon" className="h-10" />
                <input
                  type="radio"
                  id="disabilitas"
                  name="role"
                  value="disabilitas"
                  checked={role === "disabilitas"}
                  onChange={(e) => setRole(e.target.value)}
                  className="h-5 w-5 text-blue-500 focus:ring-blue-400"
                />
              </div>
              <p className="text-center font-custom text-sm md:text-base">
                Saya ingin mencari pekerjaan
              </p>
            </label>
          </div>

          {/* Tombol Daftar */}
          <div className="flex justify-center w-full">
            <button
              type="submit"
              className="font-custom font-semibold text-white bg-[#55ABCC] hover:bg-[#4da7b8] py-2 px-8 rounded-md w-full transition"
            >
              Daftar
            </button>
          </div>
        </form>

      
        {/* Modal Pop-up */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex items-center justify-center px-4"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="bg-white rounded-xl shadow-lg max-w-sm w-full p-6 text-center">
              {/* Icon Peringatan */}
              <div className="flex justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01M5.07 19h13.86c1.1 0 1.99-.9 1.99-2L21 7c0-1.1-.9-2-2-2H5.07c-1.1 0-1.99.9-1.99 2L3 17c0 1.1.89 2 2.07 2z"
                  />
                </svg>
              </div>

              {/* Judul dan pesan */}
              <h2
                id="modal-title"
                className="text-lg font-semibold text-gray-800 mb-2"
              >
                Pilih Jenis Akun Dulu
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Kamu perlu memilih apakah ingin mendaftar sebagai mitra atau
                pencari kerja.
              </p>

              {/* Tombol Tutup */}
              <button
                onClick={() => setShowModal(false)}
                className="bg-[#55ABCC] hover:bg-[#4da7b8] text-white px-6 py-2 rounded-md font-semibold transition"
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PilihAkun;
