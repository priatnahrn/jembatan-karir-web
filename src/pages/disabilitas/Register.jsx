import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, CheckCircle, AlertTriangle } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    password: "",
    konfirmasi: "",
  });
  const [modal, setModal] = useState({
    show: false,
    type: "success",
    message: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nama, email, telepon, password, konfirmasi } = formData;

    if (!nama || !email || !telepon || !password || !konfirmasi) {
      setModal({
        show: true,
        type: "error",
        message: "Semua field wajib diisi!",
        description: "Pastikan semua field telah diisi dengan benar.",
      });
    } else if (password !== konfirmasi) {
      setModal({
        show: true,
        type: "error",
        message: "Password dan konfirmasi tidak cocok.",
        description: "Pastikan password dan konfirmasi password Anda cocok.",
      });
    } else {
      setModal({
        show: true,
        type: "success",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white font-sans">
      <div className="md:w-1/2 bg-[#55ABCC] flex flex-col justify-center items-center text-center px-8 py-16 text-white">
        <h1 className="text-3xl font-bold font-custom mb-3">
          Selamat Datang Sobat Karir!
        </h1>
        <p className="text-base font-custom max-w-md">
          Mari bergabung dengan kami dan dapatkan kesempatan untukmu melalui
          platform yang inklusif dan ramah bagi semua.
        </p>
      </div>

      <div className="md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-12 relative">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-base font-medium text-[#268B9F] hover:underline py-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Kembali</span>
        </button>

        <h1 className="text-2xl md:text-3xl font-bold font-custom text-gray-800 text-center mb-2">
          Daftar Sebagai Pencari Kerja
        </h1>
        <p className="text-sm md:text-base text-center text-gray-600 mb-6">
          Daftar dengan email dan password untuk mulai membangun karirmu
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="nama"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              placeholder="Nama lengkap kamu"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-[#55ABCC]"
              value={formData.nama}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="contoh@email.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-[#55ABCC]"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="telepon"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Nomor Telepon
            </label>
            <input
              type="tel"
              id="telepon"
              name="telepon"
              placeholder="08xxxxxxxxxx"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-[#55ABCC]"
              value={formData.telepon}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Masukkan password"
              className="w-full px-4 py-2 pr-12 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#55ABCC]"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-[38px] right-3 text-gray-500 focus:outline-none"
              aria-label="toggle-password"
            >
              {showPassword ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Konfirmasi Password */}
          <div className="relative">
            <label
              htmlFor="password_confirmation"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Konfirmasi Password
            </label>
            <input
              type={showConfirm ? "text" : "password"}
              id="password_confirmation"
              name="konfirmasi"
              placeholder="Ulangi password"
              className="w-full px-4 py-2 pr-12 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#55ABCC]"
              value={formData.konfirmasi}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute top-[38px] right-3 text-gray-500 focus:outline-none"
              aria-label="toggle-confirm-password"
            >
              {showConfirm ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#55ABCC] hover:bg-[#4da7b8] text-white font-semibold py-2.5 rounded-lg transition duration-200"
          >
            Daftar
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Sudah punya akun?{" "}
            <a
              href="/login"
              className="text-[#55ABCC] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#55ABCC]"
            >
              Masuk di sini
            </a>
          </p>
        </div>

        {modal.show && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
            <div className="bg-white rounded-xl p-6 shadow-xl w-full max-w-md text-center">
              <div className="mb-3">
                {modal.type === "success" ? (
                  <CheckCircle className="w-10 h-10 mx-auto text-green-500" />
                ) : (
                  <AlertTriangle className="w-10 h-10 mx-auto text-yellow-500" />
                )}
              </div>
              {modal.type === "success" ? (
                <>
                  <h2 className="text-xl font-bold text-gray-800 mb-1">
                    Registrasi Berhasil
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Selamat! Akun kamu berhasil didaftarkan. Silakan login untuk
                    mulai menggunakan platform Jembatan Karir.
                  </p>
                  <button
                    onClick={() => {
                      setModal({ ...modal, show: false });
                      navigate("/login");
                    }}
                    className="bg-[#55ABCC] hover:bg-[#4da7b8] text-white px-6 py-2 rounded-md font-semibold"
                  >
                    Lanjut ke Login
                  </button>
                </>
              ) : (
                <>
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {modal.message}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    {modal.description}
                  </p>
                  <button
                    onClick={() => setModal({ ...modal, show: false })}
                    className="mt-2 bg-[#55ABCC] hover:bg-[#4da7b8] text-white px-6 py-2 rounded-md font-semibold"
                  >
                    Tutup
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
