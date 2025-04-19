import React from "react";
import { ArrowLeft } from "lucide-react";

const ProdukFreelancerContent = () => {
  return (
    <div className="w-full bg-white shadow-sm rounded-2xl px-5 py-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-4 cursor-pointer">
        <ArrowLeft className="text-[#55BACC]" />
        <p className="text-[#55BACC] font-medium">Kembali</p>
      </div>

      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mt-3">
        Produk Anda
      </h2>

      <div className="flex items-start p-4 gap-4 rounded-xl text-[#41788e] bg-[#E6F9FB] border border-[#C2EEF2] my-4">
        <i className="fas fa-circle-info text-[#55BACC] text-xl md:text-2xl"></i>
        <p className="text-sm md:text-base">
          Produk Anda akan ditampilkan di sini. Pastikan selalu memperhatikan
          status produk Anda.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-3 mb-5">
        <input
          type="text"
          className="p-2 rounded-lg border border-gray-200 w-full md:w-2/3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#55BACC]"
          placeholder="Cari Produk Anda"
        />
        <button className="bg-[#55BACC] hover:bg-[#4495A3] text-white font-medium px-4 py-2 rounded-lg shadow-md transition-all text-sm md:text-base">
          <i className="fas fa-add mr-2"></i>Tambah Produk
        </button>
      </div>

      <div className="flex overflow-x-auto mb-6 text-sm md:text-base border-b border-gray-200">
        <button className="py-2 px-4 border-b-2 border-[#55BACC] text-[#55BACC] font-semibold">
          Sedang Dikonfirmasi
        </button>
        <button className="py-2 px-4 text-gray-500 hover:text-[#55BACC] hover:font-semibold">
          Disetujui
        </button>
        <button className="py-2 px-4 text-gray-500 hover:text-[#55BACC] hover:font-semibold">
          Tidak Disetujui
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-gray-100 transition-all"
          >
            <img
              src="/img/sample-product.jpg"
              alt="Produk"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Nama Produk
              </h3>
              <p className="text-gray-500 text-sm mb-1">Kategori Produk</p>
              <p className="text-gray-500 text-sm mb-3">Kota</p>
              <span className="block text-center text-sm text-white bg-gray-300 rounded-md px-3 py-1 font-semibold">
                Sedang Dikonfirmasi
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProdukFreelancerContent;
