import React from "react";
import Logo from "/src/assets/img/logo-jembatan-karir.png";

const Footer = () => {
  return (
    <footer className="bg-[#408C99] px-6 md:px-24 py-12 mt-24">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Logo & Deskripsi */}
        <div className="md:w-1/4">
          <img src={Logo} alt="Logo Jembatan Karir" className="w-48 md:w-56" />
          <div className="text-white mt-4 text-sm leading-relaxed">
            <p>
              Jembatan Karir adalah perusahaan yang bergerak di bidang
              penyaluran dan penyediaan lapangan pekerjaan bagi masyarakat
              berkebutuhan khusus. Berdiri sejak tahun 2023 bersama dengan
              berlangsungnya program Innovillage.
            </p>
            <p className="mt-3">&copy; Jembatan Karir 2023–2024</p>
          </div>
        </div>

        {/* Tentang Kami */}
        <div className="md:w-1/4">
          <p className="font-semibold text-white mb-2">Tentang Kami</p>
          <ul className="text-white text-sm space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Profil Tim
              </a>
            </li>
            <li>
              <a
                href="http://www.jembatankarir.id"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Tentang Website
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Program Kami
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Komunitas Pendukung
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak Informasi */}
        <div className="md:w-1/4">
          <p className="font-semibold text-white mb-2">Kontak Informasi</p>
          <ul className="text-white text-sm space-y-1">
            <li>
              Instagram:{" "}
              <a
                href="https://instagram.com/jembatankarir.id"
                className="hover:underline"
              >
                @jembatankarir.id
              </a>
            </li>
            <li>
              Website:{" "}
              <a href="http://www.jembatankarir.id" className="hover:underline">
                jembatankarir.id
              </a>
            </li>
            <li>Contact: 0822 4680 5359</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
