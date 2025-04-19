import React from "react";
import {
  IdCard,
  AlignJustify,
  Briefcase,
  PersonStanding,
  GraduationCap,
  Shapes,
  CircleCheck,
  ArrowLeft,
  Info,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const EditProfilContent = () => {
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
        Edit Profil
      </h2>

      <div className="flex items-start p-4 gap-4 rounded-xl text-[#41788e] bg-[#E6F9FB] border border-[#C2EEF2] my-4">
        <Info className="text-[#55BACC] text-xl" />
        <p className="text-sm md:text-base">
          Lengkapi profil Anda disini. Pastikan informasi yang Anda masukkan
          sesuai.
        </p>
      </div>

      <div className="space-y-3 mt-4">
        {[
          { icon: <IdCard />, label: "Data Pribadi", link: "/data-pribadi" },
          { icon: <AlignJustify />, label: "Ringkasan", link: "/ringkasan" },
          {
            icon: <Briefcase />,
            label: "Pengalaman Kerja",
            link: "/pengalaman",
          },
          {
            icon: <PersonStanding />,
            label: "Riwayat Disabilitas",
            link: "/riwayat-disabilitas",
          },
          { icon: <GraduationCap />, label: "Pendidikan", link: "/pendidikan" },
          { icon: <Shapes />, label: "Keterampilan", link: "/keterampilan" },
          { icon: <CircleCheck />, label: "Minat", link: "/minat" },
        ].map((item, idx) => (
          <div
            key={idx}
            onClick={() => navigate(item.link)}
            className="flex items-center gap-4 p-3 rounded-md hover:text-[#55BACC] hover:bg-gray-50 cursor-pointer"
          >
            {item.icon}
            <p className="text-sm md:text-base">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditProfilContent;
