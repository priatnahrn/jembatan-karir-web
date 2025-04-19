import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, DollarSign, Search } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CariFreelancer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedKategori, setSelectedKategori] = useState("Semua");

  const produkList = [
    {
      id: 1,
      nama_produk: "Jasa Desain Logo",
      kategori: "Desain",
      gambar: "logo-design.jpg",
      status_produk: "accepted",
      harga_terendah: 50000,
      disabilitas: {
        kota: "Yogyakarta",
        provinsi: "DI Yogyakarta",
      },
    },
    {
      id: 2,
      nama_produk: "Edit Video Konten",
      kategori: "Multimedia",
      gambar: "video-editing.jpg",
      status_produk: "accepted",
      harga_terendah: 75000,
      disabilitas: {
        kota: "Surabaya",
        provinsi: "Jawa Timur",
      },
    },
    {
      id: 3,
      nama_produk: "Ilustrasi Digital",
      kategori: "Desain",
      gambar: "digital-art.jpg",
      status_produk: "accepted",
      harga_terendah: 100000,
      disabilitas: {
        kota: "Bandung",
        provinsi: "Jawa Barat",
      },
    },
    {
      id: 4,
      nama_produk: "Transkrip Audio",
      kategori: "Pengetikan",
      gambar: "transkrip.jpg",
      status_produk: "accepted",
      harga_terendah: 40000,
      disabilitas: {
        kota: "Makassar",
        provinsi: "Sulawesi Selatan",
      },
    },
  ];

  const kategoriList = ["Semua", "Desain", "Multimedia", "Pengetikan"];

  const user = {
    id: 101,
    role: "perusahaan", // atau 'disabilitas'
  };

  // Filter produk berdasarkan search & kategori
  const filteredProduk = produkList.filter((p) => {
    const matchSearch = p.nama_produk
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchKategori =
      selectedKategori === "Semua" || p.kategori === selectedKategori;
    return p.status_produk === "accepted" && matchSearch && matchKategori;
  });

  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-12 py-20 bg-[#F8FAFC] min-h-screen mt-12">
        <h1 className="text-3xl font-bold text-[#333] mb-8 text-center">
          Temukan Freelancer Disabilitas
        </h1>

        {/* Search & Kategori */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari jasa freelancer..."
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
          {filteredProduk.length > 0 ? (
            filteredProduk.map((produk) => (
              <div
                key={produk.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md overflow-hidden"
              >
                <img
                  src={`/gambar_produk/${produk.gambar}`}
                  alt={`Gambar Produk ${produk.nama_produk}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 space-y-3">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {produk.nama_produk}
                  </h2>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <DollarSign className="w-4 h-4" />
                    <span>
                      Mulai dari Rp
                      {produk.harga_terendah.toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>
                      {produk.disabilitas.kota}, {produk.disabilitas.provinsi}
                    </span>
                  </div>

                  <Link
                    to={
                      user.role === "disabilitas"
                        ? `/freelancer/${user.id}/produk/${produk.id}`
                        : `/freelancer/${produk.id}/perusahaan/${user.id}`
                    }
                  >
                    <div className="bg-[#55BACC] mt-4 text-center hover:bg-[#4DA7B8] text-white font-bold py-2 px-4 rounded-lg text-sm">
                      Lihat Produk
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
              <p>Tidak ada freelancer ditemukan.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CariFreelancer;
