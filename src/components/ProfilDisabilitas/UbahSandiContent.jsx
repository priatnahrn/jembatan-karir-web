import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Key, Eye, EyeOff, Info } from "lucide-react";

const UbahSandiContent = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const toggleVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div >
      <div
        className="flex items-center gap-3 mb-4 cursor-pointer"
        onClick={() => navigate("/home-disabilitas")}
      >
        <ArrowLeft className="text-[#55BACC]" />
        <p className="text-[#55BACC] font-medium">Kembali</p>
      </div>

      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mt-3 flex items-center gap-2">
       Ubah Kata Sandi
      </h2>

      <div className="flex items-start p-4 gap-4 rounded-xl text-yellow-600 bg-yellow-50 border border-yellow-100 my-4">
        <Info className="text-yellow-400 w-5 h-5 mt-1" />
        <p className="text-sm md:text-base">
          Ubah kata sandi lama Anda dengan kata sandi baru. Pastikan kata sandi
          mengandung minimal 8 karakter dengan huruf besar, huruf kecil dan
          simbol.
        </p>
      </div>

      <form className="space-y-4 mt-6">
        <div className="relative">
          <label
            htmlFor="password-lama"
            className="block md:text-base text-sm font-medium text-gray-700"
          >
            Password Lama
          </label>
          <input
            type={showPassword.old ? "text" : "password"}
            id="password-lama"
            name="password_lama"
            placeholder="Masukkan Password Lama Anda"
            className="mt-1 p-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#55BACC] bg-white text-gray-700"
          />
          <div
            className="absolute right-3 top-9 cursor-pointer text-gray-400"
            onClick={() => toggleVisibility("old")}
          >
            {showPassword.old ? <EyeOff size={18} /> : <Eye size={18} />}
          </div>
        </div>

        <div className="relative">
          <label
            htmlFor="password-baru"
            className="block md:text-base text-sm font-medium text-gray-700"
          >
            Password Baru
          </label>
          <input
            type={showPassword.new ? "text" : "password"}
            id="password-baru"
            name="password_baru"
            placeholder="Masukkan Password Baru Anda"
            className="mt-1 p-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#55BACC] bg-white text-gray-700"
          />
          <div
            className="absolute right-3 top-9 cursor-pointer text-gray-400"
            onClick={() => toggleVisibility("new")}
          >
            {showPassword.new ? <EyeOff size={18} /> : <Eye size={18} />}
          </div>
        </div>

        <div className="relative">
          <label
            htmlFor="konfirmasi-password-baru"
            className="block md:text-base text-sm font-medium text-gray-700"
          >
            Konfirmasi Password Baru
          </label>
          <input
            type={showPassword.confirm ? "text" : "password"}
            id="konfirmasi-password-baru"
            name="password_baru_confirmation"
            placeholder="Konfirmasi Password Baru Anda"
            className="mt-1 p-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#55BACC] bg-white text-gray-700"
          />
          <div
            className="absolute right-3 top-9 cursor-pointer text-gray-400"
            onClick={() => toggleVisibility("confirm")}
          >
            {showPassword.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#55ABCC] hover:bg-[#4495A3] text-white p-2 rounded-lg w-full shadow-md hover:shadow-lg transition-all"
        >
          Ubah
        </button>
      </form>
    </div>
  );
};

export default UbahSandiContent;
