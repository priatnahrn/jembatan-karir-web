import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const dummyUsers = [
  {
    email: "disabilitas@example.com",
    password: "123456",
    role: "disabilitas",
    nama_lengkap: "Budi Santoso",
    kota: "Makassar",
    foto_profil: "",
  },
  {
    email: "perusahaan@example.com",
    password: "123456",
    role: "perusahaan",
    nama_lengkap: "PT Karir Maju",
    kota: "Jakarta",
    foto_profil: "",
  },
];

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError("Email dan password wajib diisi!");
    } else {
      const user = dummyUsers.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate(
          user.role === "perusahaan"
            ? "/perusahaan/profil"
            : "/disabilitas/profil"
        );
      } else {
        setError("Email atau password salah!");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white font-sans">
      <div className="md:w-1/2 bg-[#55ABCC] flex flex-col justify-center items-center text-center px-8 py-16 text-white">
        <h1 className="text-3xl font-bold font-custom py-5">
          Selamat Datang Kembali!
        </h1>
        <p className="text-base font-custom max-w-md">
          Silakan masuk untuk melanjutkan ke dashboard dan mulai eksplor peluang
          karirmu.
        </p>
      </div>

      <div className="md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-12">
        <h1 className="text-xl md:text-2xl font-bold font-custom text-center text-gray-800">
          Login Akun
        </h1>
        <p className="text-sm md:text-base text-center text-gray-600 mt-2">
          Masukkan email dan password yang sudah terdaftar
        </p>

        <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
          {error && (
            <p className="text-sm text-red-500 font-medium text-center">
              {error}
            </p>
          )}

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

          <button
            type="submit"
            className="w-full bg-[#55ABCC] hover:bg-[#4da7b8] text-white font-semibold py-2.5 rounded-lg transition duration-200"
          >
            Masuk
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600 font-custom">
            Belum punya akun?{" "}
            <a
              href="/pilih-akun"
              className="text-[#55ABCC] font-semibold hover:underline"
            >
              Daftar sekarang
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
