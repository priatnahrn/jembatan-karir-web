import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Accessibility, Search } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CariLowongan = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedKategori, setSelectedKategori] = useState("Semua");

  // Dummy data lowongan
  const lowongans = [
    {
      id: 1,
      nama_lowongan: "Customer Service",
      kota: "Makassar",
      provinsi: "Sulawesi Selatan",
      jenis_disabilitas: "Tuna Daksa",
      tanggal_selesai: "2025-05-15",
      kategori: "Pelayanan",
      gambar: "cs.jpg",
    },
    {
      id: 2,
      nama_lowongan: "Admin Data Entry",
      kota: "Jakarta",
      provinsi: "DKI Jakarta",
      jenis_disabilitas: "Tuna Rungu",
      tanggal_selesai: "2025-05-20",
      kategori: "Administrasi",
      gambar: "admin.jpg",
    },
    {
      id: 3,
      nama_lowongan: "Desainer Grafis",
      kota: "Bandung",
      provinsi: "Jawa Barat",
      jenis_disabilitas: "Tuna Netra",
      tanggal_selesai: "2025-06-01",
      kategori: "Kreatif",
      gambar: "design.jpg",
    },
    {
      id: 4,
      nama_lowongan: "Social Media Officer",
      kota: "Medan",
      provinsi: "Sumatera Utara",
      jenis_disabilitas: "Tuna Daksa",
      tanggal_selesai: "2025-05-30",
      kategori: "Pemasaran",
      gambar: "sosmed.jpg",
    },
  ];

  const kategoriList = [
    "Semua",
    "Pelayanan",
    "Administrasi",
    "Kreatif",
    "Pemasaran",
  ];

  const user = { id: 101, role: "disabilitas" };

  // Filter hasil pencarian & kategori
  const filteredLowongans = lowongans.filter((l) => {
    const cocokSearch = l.nama_lowongan
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const cocokKategori =
      selectedKategori === "Semua" || l.kategori === selectedKategori;
    return cocokSearch && cocokKategori;
  });

  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-12 py-20 bg-[#F8FAFC] min-h-screen">
        <h1 className="text-3xl font-bold text-[#333] mb-8 text-center mt-12">
          Temukan Lowongan Pekerjaan
        </h1>

        {/* Search & Kategori */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari lowongan..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#55BACC]"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-3 flex-wrap">
            {kategoriList.map((kategori) => (
              <button
                key={kategori}
                onClick={() => setSelectedKategori(kategori)}
                className={`px-4 py-2 rounded-full text-sm font-medium border ${
                  selectedKategori === kategori
                    ? "bg-[#55BACC] text-white border-[#55BACC]"
                    : "text-gray-600 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {kategori}
              </button>
            ))}
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredLowongans.length > 0 ? (
            filteredLowongans.map((lowongan) => (
              <div
                key={lowongan.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md overflow-hidden"
              >
                <img
                  src={`/perusahaan/gambar_lowongan/${lowongan.gambar}`}
                  alt={lowongan.nama_lowongan}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 space-y-3">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {lowongan.nama_lowongan}
                  </h2>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>
                      {lowongan.kota}, {lowongan.provinsi}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Accessibility className="w-4 h-4" />
                    <span>{lowongan.jenis_disabilitas}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>
                      Ditutup sampai{" "}
                      {new Date(lowongan.tanggal_selesai).toLocaleDateString(
                        "id-ID",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </span>
                  </div>

                  <Link
                    to={
                      user.role === "disabilitas"
                        ? `/lowongan/${user.id}/disabilitas/${lowongan.id}`
                        : `/lowongan/${user.id}/perusahaan/${lowongan.id}`
                    }
                  >
                    <div className="bg-[#55BACC] mt-4 text-center hover:bg-[#4DA7B8] text-white font-bold py-2 px-4 rounded-lg text-sm">
                      Lihat Lowongan
                    </div>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-12">
              <img
                src="/img/empty.png"
                alt="Data kosong"
                className="mx-auto w-40 mb-4"
              />
              <p>Tidak ada lowongan ditemukan.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CariLowongan;
