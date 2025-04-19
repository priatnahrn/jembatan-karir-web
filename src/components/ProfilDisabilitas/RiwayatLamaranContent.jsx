import React from "react";
import {
  ArrowLeft,
  Info,
  Briefcase,
  Landmark,
  MapPin,
  Layers,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Empty from "/src/assets/img/empty.png";

const RiwayatLamaranContent = ({ applications = [] }) => {
  const navigate = useNavigate();

  return (
    <div className="">
      <div
        className="flex items-center gap-3 mb-4 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="text-[#55BACC]" />
        <p className="text-[#55BACC] font-medium">Kembali</p>
      </div>

      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mt-3">
        Riwayat Lamaran Anda
      </h2>

      <div className="flex items-start p-4 gap-4 rounded-xl text-[#41788e] bg-[#E6F9FB] border border-[#C2EEF2] my-4">
        <Info className="text-[#55BACC] text-xl" />
        <p className="text-sm md:text-base">
          Riwayat lamaran Anda akan ditampilkan disini. Pastikan Anda selalu
          memperhatikan status lamaran Anda.
        </p>
      </div>

      <div className="flex gap-4 border-b border-gray-200 mb-6">
        <button className="py-2 px-4 text-[#55BACC] border-b-2 border-[#55BACC] font-semibold text-sm md:text-base">
          Proses Seleksi
        </button>
        <button className="py-2 px-4 text-gray-400 hover:text-[#55BACC] hover:font-semibold text-sm md:text-base">
          Selesai
        </button>
      </div>

      <div className="flex flex-wrap gap-6">
        {applications.length === 0 ? (
          <div className="w-full text-center">
            <img src={Empty} alt="Empty" className="mx-auto h-24" />
            <p className="text-gray-400 mt-4">
              Yah.. Anda belum punya lamaran nihh
            </p>
          </div>
        ) : (
          applications.map((item, idx) => (
            <div
              key={idx}
              className="w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={item.gambar}
                alt={`Gambar ${item.nama_lowongan}`}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-base md:text-lg text-gray-800 mb-2">
                  {item.nama_lowongan}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Layers className="w-4 h-4" />
                  {item.sektor}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Landmark className="w-4 h-4" />
                  {item.perusahaan}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  {item.kota}
                </div>
                <p className="bg-gray-300 text-white text-center text-sm font-bold py-1 rounded">
                  Sedang Proses Seleksi
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RiwayatLamaranContent;
