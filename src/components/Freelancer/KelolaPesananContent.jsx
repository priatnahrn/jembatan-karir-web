import React from "react";
import { ArrowLeft, Info } from "lucide-react";

const KelolaPesananContent = ({ onBack }) => {
  const pesananDummy = [];

  return (
    <div className="w-full bg-white shadow-sm rounded-2xl px-5 py-6 border border-gray-100">
      <div
        className="flex items-center gap-3 mb-4 cursor-pointer"
        onClick={onBack}
      >
        <ArrowLeft className="text-[#55BACC]" />
        <p className="text-[#55BACC] font-medium">Kembali</p>
      </div>

      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mt-3">
        Kelola Pesanan Anda
      </h2>

      <div className="flex items-start p-4 gap-4 rounded-xl text-[#41788e] bg-[#E6F9FB] border border-[#C2EEF2] my-4">
        <Info className="text-[#55BACC] text-xl" />
        <p className="text-sm md:text-base">
          Kelola pesanan Anda disini, pastikan untuk memperhatikan setiap status
          pesanan.
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto mb-6">
        {["Konfirmasi", "Diproses", "Selesai", "Dibatalkan"].map(
          (label, idx) => (
            <button
              key={idx}
              className={`py-2 px-4 rounded-md border text-sm md:text-base font-medium transition-all ${
                idx === 0
                  ? "text-[#55BACC] border-[#55BACC] bg-[#ECF9FB]"
                  : "text-gray-500 border-gray-200 hover:border-[#55BACC] hover:text-[#55BACC]"
              }`}
            >
              {label}
            </button>
          )
        )}
      </div>

      {pesananDummy.length === 0 ? (
        <div className="text-center text-gray-400">
          <img
            src="/img/empty.png"
            alt="Kosong"
            className="w-60 mx-auto mb-4"
          />
          <p>Yah.. Anda belum punya pesanan nih</p>
        </div>
      ) : (
        pesananDummy.map((item, i) => (
          <div
            key={i}
            className="mb-4 p-4 border border-gray-200 rounded-lg shadow-sm"
          >
            <p className="font-medium text-gray-800">
              Nomor Antrian : {item.id}
            </p>
            <p className="text-gray-700">Produk: {item.nama_produk}</p>
            <p className="text-gray-600 text-sm mb-3">
              Dipesan oleh: {item.perusahaan}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium text-gray-700">Deskripsi:</span>{" "}
              {item.deskripsi}
            </p>
            <div className="flex gap-3 mt-4">
              <button className="bg-[#55BACC] text-white px-4 py-2 rounded-md w-full hover:bg-[#4495A7]">
                Konfirmasi Pesanan
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md w-full hover:bg-red-600">
                Batalkan
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default KelolaPesananContent;
