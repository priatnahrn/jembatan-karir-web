import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "/src/components/Navbar";
import SidebarMenu from "/src/components/SidebarMenuDisabilitas";
import EditProfilContent from "/src/components/ProfilDisabilitas/EditProfilContent";
import LengkapiDokumenContent from "/src/components/ProfilDisabilitas/LengkapiDokumenContent";
import RiwayatLamaranContent from "/src/components/ProfilDisabilitas/RiwayatLamaranContent";
import TersimpanContent from "/src/components/ProfilDisabilitas/TersimpanContent";
import UbahSandiContent from "/src/components/ProfilDisabilitas/UbahSandiContent";

const ProfilDisabilitas = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [showConfirmLogout, setShowConfirmLogout] = useState(false);
  const [showConfirmFreelancer, setShowConfirmFreelancer] = useState(false);
  const [activeMenu, setActiveMenu] = useState("edit-profil");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData || userData.role !== "disabilitas") {
      navigate("/login");
    } else {
      setUser(userData);
    }
  }, [navigate]);

  const handleLogout = () => {
    setShowConfirmLogout(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleFreelancerSwitch = () => {
    setShowConfirmFreelancer(true);
  };

  const confirmFreelancer = () => {
    navigate("/dashboard-freelancer");
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "edit-profil":
        return <EditProfilContent />;
      case "lengkapi-dokumen":
        return <LengkapiDokumenContent />;
      case "riwayat-lamaran":
        return <RiwayatLamaranContent />;
      case "tersimpan":
        return <TersimpanContent />;
      case "ubah-sandi":
        return <UbahSandiContent />;
      default:
        return <EditProfilContent />;
    }
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Navbar isLoggedIn={true} />

      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto px-4 md:px-8 py-20 mt-12">
        <SidebarMenu
          user={user}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          onLogout={handleLogout}
          onSwitchFreelancer={handleFreelancerSwitch}
        />

        <div className="bg-white shadow-sm rounded-2xl p-6 w-full md:w-3/4 border border-gray-100">
          {renderContent()}
        </div>
      </div>

      {/* Modal Logout */}
      {showConfirmLogout && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl p-6 shadow-xl w-full max-w-sm text-center">
            <h2 className="text-lg font-bold mb-2 text-gray-800">
              Konfirmasi Logout
            </h2>
            <p className="text-gray-600 mb-4">
              Apakah Anda yakin ingin logout dan kembali ke halaman utama?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowConfirmLogout(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Batal
              </button>
              <button
                onClick={confirmLogout}
                className="bg-[#55ABCC] text-white px-4 py-2 rounded-md hover:bg-[#4da7b8]"
              >
                Ya, Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Freelancer Switch */}
      {showConfirmFreelancer && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl p-6 shadow-xl w-full max-w-sm text-center">
            <h2 className="text-lg font-bold mb-2 text-gray-800">
              Beralih ke Mode Freelancer
            </h2>
            <p className="text-gray-600 mb-4">
              Apakah Anda yakin ingin beralih ke mode freelancer? Anda akan
              dialihkan ke dashboard freelancer.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowConfirmFreelancer(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Batal
              </button>
              <button
                onClick={confirmFreelancer}
                className="bg-[#55ABCC] text-white px-4 py-2 rounded-md hover:bg-[#4da7b8]"
              >
                Ya, Lanjutkan
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="w-full text-center py-4 text-sm text-gray-500 bg-gray-50 border-t border-gray-100">
        &copy; {new Date().getFullYear()} Jembatan Karir. All rights reserved.
      </footer>
    </div>
  );
};

export default ProfilDisabilitas;
