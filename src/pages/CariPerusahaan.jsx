import React, { useState } from "react";
import { MapPin, Building, Search } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CariPerusahaan = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSektor, setSelectedSektor] = useState("Semua");

  // Dummy data perusahaan
  const perusahaanList = [
    {
      id: 1,
      nama_perusahaan: "PT Cipta Mandiri",
      kota: "Jakarta",
      provinsi: "DKI Jakarta",
      sektor: "Teknologi",
      gallery: "company1.jpg",
    },
    {
      id: 2,
      nama_perusahaan: "CV Maju Jaya",
      kota: "Bandung",
      provinsi: "Jawa Barat",
      sektor: "Manufaktur",
      gallery: "company2.jpg",
    },
    {
      id: 3,
      nama_perusahaan: "PT Sejahtera Abadi",
      kota: "Surabaya",
      provinsi: "Jawa Timur",
      sektor: "Keuangan",
      gallery: "company3.jpg",
    },
    {
      id: 4,
      nama_perusahaan: "PT Digital Nusantara",
      kota: "Makassar",
      provinsi: "Sulawesi Selatan",
      sektor: "Teknologi",
      gallery: "company4.jpg",
    },
  ];

  const sektorList = ["Semua", "Teknologi", "Manufaktur", "Keuangan"];

  const filteredPerusahaan = perusahaanList.filter((p) => {
    const cocokSearch = p.nama_perusahaan
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const cocokSektor =
      selectedSektor === "Semua" || p.sektor === selectedSektor;
    return cocokSearch && cocokSektor;
  });

  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-12 py-20 bg-[#F8FAFC] min-h-screen">
        <h1 className="text-3xl font-bold text-[#333] mb-8 text-center mt-12">
          Daftar Perusahaan Mitra
        </h1>

        {/* Search & Filter Sektor */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari perusahaan..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#55BACC]"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-3 flex-wrap">
            {sektorList.map((sektor) => (
              <button
                key={sektor}
                onClick={() => setSelectedSektor(sektor)}
                className={`px-4 py-2 rounded-full text-sm font-medium border ${
                  selectedSektor === sektor
                    ? "bg-[#55BACC] text-white border-[#55BACC]"
                    : "text-gray-600 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {sektor}
              </button>
            ))}
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPerusahaan.length > 0 ? (
            filteredPerusahaan.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md overflow-hidden"
              >
                <img
                  src={`/perusahaan/gallery/${p.gallery}`}
                  alt={p.nama_perusahaan}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 space-y-3">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {p.nama_perusahaan}
                  </h2>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>
                      {p.kota}, {p.provinsi}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Building className="w-4 h-4" />
                    <span>{p.sektor}</span>
                  </div>
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
              <p>Saat ini belum ada perusahaan ditemukan. Ditunggu yaa!</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CariPerusahaan;
