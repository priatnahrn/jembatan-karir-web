import React from "react";
import {
  User,
  FileText,
  Briefcase,
  Bookmark,
  Key,
  Repeat,
  LogOut,
} from "lucide-react";

const SidebarMenuDisabilitas = ({
  activeMenu,
  setActiveMenu,
  onLogout,
  onSwitchFreelancer,
  user,
}) => {
  const menu = [
    { key: "edit-profil", label: "Edit Profil", icon: <User /> },
    { key: "lengkapi-dokumen", label: "Lengkapi Dokumen", icon: <FileText /> },
    { key: "riwayat-lamaran", label: "Riwayat Lamaran", icon: <Briefcase /> },
    { key: "tersimpan", label: "Tersimpan", icon: <Bookmark /> },
    { key: "ubah-sandi", label: "Ubah Kata Sandi", icon: <Key /> },
    {
      key: "dashboard-freelancer",
      label: "Beralih ke Mode Freelancer",
      icon: <Repeat />,
    },
  ];

  return (
    <div className="w-full md:w-2/5 space-y-5">
      <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between border border-gray-100">
        <div className="flex gap-4 items-center">
          <img
            src={user?.foto_profil || "/img/profil-photo.png"}
            alt="Foto Profil"
            className="w-12 h-12 rounded-full object-cover border border-gray-200"
          />
          <div>
            <p className="font-semibold text-lg text-gray-800">
              {user?.nama_lengkap || "Pengguna"}
            </p>
            <p className="text-sm text-gray-500">{user?.kota || "-"}</p>
          </div>
        </div>
        <button
          onClick={() => setActiveMenu("edit-foto")}
          className="flex items-center p-2 text-sm rounded-md border border-gray-200 hover:bg-gray-50 text-gray-600"
        >
          <User className="w-4 h-4 mr-2" /> Edit Foto
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100">
        {menu.map((item) => (
          <div
            key={item.key}
            onClick={() =>
              item.key === "dashboard-freelancer"
                ? onSwitchFreelancer()
                : setActiveMenu(item.key)
            }
            className={`flex items-center gap-4 px-5 py-4 cursor-pointer hover:bg-gray-50 text-sm md:text-base transition-all ${
              activeMenu === item.key
                ? "text-[#55BACC] font-semibold"
                : "text-gray-700"
            }`}
          >
            {item.icon}
            <p>{item.label}</p>
          </div>
        ))}

        <div
          onClick={onLogout}
          className="flex items-center gap-4 px-5 py-4 cursor-pointer text-red-500 hover:bg-red-50"
        >
          <LogOut className="w-5 h-5" />
          <p className="text-sm md:text-base">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenuDisabilitas;
