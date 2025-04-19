import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
    konfirmasi: "",
  });
  const [modal, setModal] = useState({
    show: false,
    type: "success",
    message: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nama, email, password, konfirmasi } = formData;

    if (!nama || !email || !password || !konfirmasi) {
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
        message: "Registrasi Berhasil",
        description: "Akun Anda berhasil dibuat. Silakan login.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white font-sans relative">
      <div className="md:w-1/2 bg-[#55ABCC] flex flex-col justify-center items-center text-center px-8 py-16 text-white">
        <h1 className="text-3xl font-bold font-custom py-5">
          Selamat Datang Sobat Karir!
        </h1>
        <p className="text-base font-custom max-w-md">
          Mari bergabung dengan kami dan dapatkan kesempatan untukmu.
        </p>
      </div>

      <div className="md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-12">
        <button
          onClick={() => navigate(-1)}
          aria-label="Kembali ke halaman sebelumnya"
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

        <h1 className="text-xl md:text-2xl font-bold font-custom text-center text-gray-800">
          Daftar Sebagai Perusahaan
        </h1>
        <p className="text-sm md:text-base font-custom text-center text-gray-600 mt-2">
          Daftar dengan menggunakan email dan password
        </p>

        <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="nama"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Nama Perusahaan
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              placeholder="Nama perusahaan Anda"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#55ABCC]"
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
              placeholder="Masukkan Email Anda"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#55ABCC]"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

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
              placeholder="Masukkan Password Anda"
              className="w-full px-4 py-2 pr-12 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#55ABCC]"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-[38px] right-3 text-gray-500"
              aria-label="toggle-password"
            >
              {showPassword ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
            </button>
          </div>

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
              placeholder="Konfirmasi Ulang Password Anda"
              className="w-full px-4 py-2 pr-12 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#55ABCC]"
              value={formData.konfirmasi}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute top-[38px] right-3 text-gray-500"
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
          <p className="text-sm text-gray-600 font-custom">
            Sudah punya akun?{" "}
            <a
              href="/perusahaan/login"
              className="text-[#55ABCC] font-semibold hover:underline"
            >
              Masuk di sini
            </a>
          </p>
        </div>
      </div>

      {modal.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-xl p-6 shadow-xl w-full max-w-md text-center">
            <div className="mb-3">
              {modal.type === "success" ? (
                <svg
                  className="w-10 h-10 mx-auto text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-10 h-10 mx-auto text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M5.07 19h13.86A2.07 2.07 0 0021 17V7a2.07 2.07 0 00-2.07-2H5.07A2.07 2.07 0 003 7v10a2.07 2.07 0 002.07 2z"
                  />
                </svg>
              )}
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">
              {modal.message}
            </h2>
            <p className="text-sm text-gray-600 mb-4">{modal.description}</p>
            <button
              onClick={() => {
                setModal({ ...modal, show: false });
                if (modal.type === "success") navigate("/perusahaan/login");
              }}
              className="bg-[#55ABCC] hover:bg-[#4da7b8] text-white px-6 py-2 rounded-md font-semibold"
            >
              {modal.type === "success" ? "Lanjut ke Login" : "Tutup"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
