import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ComingSoon from "/src/assets/img/coming-soon.png";

const TersimpanContent = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="flex items-center gap-3 mb-4 cursor-pointer"
        onClick={() => navigate("/home-disabilitas")}
      >
        <ArrowLeft className="text-[#55BACC]" />
        <p className="text-[#55BACC] font-medium">Kembali</p>
      </div>

      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        Tersimpan
      </h2>

      <div className="text-center">
        <img
          src={ComingSoon}
          alt="Coming Soon"
          className="w-36 mx-auto mb-4"
        />
        <h3 className="font-semibold text-lg text-gray-800">Coming Soon!</h3>
        <p className="text-gray-500 text-sm">
          Fitur ini masih dalam proses pengembangan.
        </p>
      </div>
    </div>
  );
};

export default TersimpanContent;
