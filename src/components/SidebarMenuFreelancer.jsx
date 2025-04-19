import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "/src/components/Navbar";
import SidebarFreelancerMenu from "/src/components/SidebarMenuFreelancer";
import ComingSoon from "/src/assets/img/coming-soon.png";
import ProdukFreelancerContent from "/src/components/Freelancer/ProdukFreelancerContent";
import KelolaPesananContent from "/src/components/Freelancer/KelolaPesananContent";

const DashboardFreelancer = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [showConfirmLogout, setShowConfirmLogout] = useState(false);
  const [showConfirmSwitch, setShowConfirmSwitch] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");

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

  const handleSwitchToJobseeker = () => {
    setShowConfirmSwitch(true);
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return (
          <div className="px-5 py-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Overview
            </h2>
            <div className="flex items-start p-4 gap-4 rounded-xl text-[#41788e] bg-[#E6F9FB] border border-[#C2EEF2] mb-6">
              <i className="fas fa-circle-info text-[#55BACC] text-xl"></i>
              <p className="text-sm md:text-base">
                Overview terkait dengan informasi jumlah produk dan jumlah
                pelanggan Anda.
              </p>
            </div>
            <div className="w-full gap-5 mx-auto text-center">
              <img
                src={ComingSoon}
                alt="Coming Soon"
                className="w-36 mx-auto"
              />
              <h1 className="text-gray-600 font-semibold">Coming Soon!</h1>
              <p className="text-gray-400">
                Fitur ini masih dalam pengembangan
              </p>
            </div>
          </div>
        );
      case "produk":
        return <ProdukFreelancerContent />;
      case "pesanan":
        return <KelolaPesananContent />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Navbar isLoggedIn={true} />
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto px-4 md:px-8 py-20 mt-12">
        <SidebarFreelancerMenu
          user={user}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          onLogout={handleLogout}
          onSwitchToJobseeker={handleSwitchToJobseeker}
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

      {/* Modal Switch ke Cari Kerja */}
      {showConfirmSwitch && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl p-6 shadow-xl w-full max-w-sm text-center">
            <h2 className="text-lg font-bold mb-2 text-gray-800">
              Beralih ke Mode Cari Kerja
            </h2>
            <p className="text-gray-600 mb-4">
              Apakah Anda yakin ingin beralih ke mode pencari kerja?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowConfirmSwitch(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  setShowConfirmSwitch(false);
                  navigate("/profil-disabilitas");
                }}
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

export default DashboardFreelancer;
