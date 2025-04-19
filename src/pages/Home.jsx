import React from "react";
import Navbar from "/src/components/Navbar.jsx";
import Banner1 from "/src/assets/img/banner-1.png";
import Banner2 from "/src/assets/img/banner-2.png";
import Alasan1 from "/src/assets/img/pict-1.jpg";
import Alasan2 from "/src/assets/img/pict-2.jpg";
import Alasan3 from "/src/assets/img/pict-3.jpg";
import Alasan4 from "/src/assets/img/pict-4.jpg";
import Partner1 from "/src/assets/img/innovillage.png";
import Partner2 from "/src/assets/img/wiyata-guna.png";
import Partner3 from "/src/assets/img/telkom-univ.png";
import Partner4 from "/src/assets/img/bojongsoang.png";
import Slider from "react-slick";
import Footer from "../components/Footer";

const alasan = [
  {
    img: Alasan1, // ganti dengan ilustrasi yang sudah kamu generate tadi
    title: "Akses Mudah",
    desc: "Platform kami dapat diakses dengan mudah dari berbagai perangkat — baik desktop, tablet, maupun smartphone, tanpa hambatan teknis.",
  },
  {
    img: Alasan2,
    title: "Peluang Luas",
    desc: "Tersedia berbagai lowongan pekerjaan dari perusahaan ternama yang terbuka untuk semua kalangan, termasuk penyandang disabilitas.",
  },
  {
    img: Alasan3,
    title: "Gratis",
    desc: "Seluruh fitur Jembatan Karir dapat digunakan tanpa biaya apapun. Fokus kami adalah memberdayakan semua orang secara setara.",
  },
  {
    img: Alasan4,
    title: "Dukungan Komunitas",
    desc: "Didukung komunitas inklusif yang saling mendukung dan ramah. Kamu tidak sendiri dalam membangun masa depan karirmu.",
  },
];

const langkah = [
  "Buat akun di platform Jembatan Karir",
  "Lengkapi profil dan unggah CV",
  "Cari pekerjaan sesuai keinginan",
  "Lamar dan tunggu panggilan interview",
];

const testimonies = [
  {
    img: "/img/user-1.png",
    name: "Anton Wijayanto",
    quote:
      "Meskipun saya tidak bisa berjalan, tetapi saya berhasil mendapatkan pekerjaan sebagai seorang Developer di perusahaan start up.",
  },
  {
    img: "/img/user-2.png",
    name: "Siti Nuraini",
    quote:
      "Platform ini sangat ramah bagi pengguna disabilitas, dan saya merasa benar-benar didukung.",
  },
  {
    img: "/img/user-3.png",
    name: "Budi Hartono",
    quote:
      "Saya berhasil mendapatkan pekerjaan impian saya hanya dalam dua minggu. Sangat terbantu!",
  },
  {
    img: "/img/user-4.png",
    name: "Rina Sasmita",
    quote:
      "Dukungan komunitasnya luar biasa, saya merasa tidak sendiri saat mencari kerja.",
  },
  {
    img: "/img/user-5.png",
    name: "Doni Saputra",
    quote:
      "Awalnya saya ragu, tapi ternyata fitur-fiturnya lengkap dan mudah digunakan.",
  },
  {
    img: "/img/user-6.png",
    name: "Lestari",
    quote:
      "Saya seorang tunanetra, dan saya merasa sangat dihargai di platform ini.",
  },
  {
    img: "/img/user-7.png",
    name: "Agus Widodo",
    quote:
      "Antarmuka simpel dan mudah digunakan. Cocok banget buat semua kalangan.",
  },
  {
    img: "/img/user-8.png",
    name: "Yohana Maria",
    quote:
      "Peluangnya sangat luas. Saya bisa terhubung dengan banyak perusahaan tanpa hambatan.",
  },
  {
    img: "/img/user-9.png",
    name: "Rahmat Siregar",
    quote:
      "Saya baru lulus kuliah dan langsung dapat kerja lewat Jembatan Karir. Mantap!",
  },
];

const testimonialSettings = {
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const settings = {
  infinite: true,
  speed: 2000, // kecepatan transisi (ms)
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true, // ✅ INI PENTING
  autoplaySpeed: 3000, // tiap 3 detik slide berganti
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const sliderImages = [Partner1, Partner2, Partner3, Partner4];
const Card = ({ img, title, desc }) => (
  <div className="p-6 md:p-8 rounded-xl shadow-md bg-white hover:shadow-lg transition duration-300 text-center">
    <img src={img} alt={title} className="mx-auto mb-4 h-20" />
    <h3 className="font-semibold text-lg text-[#333]">{title}</h3>
    <p className="text-sm text-gray-600 mt-2">{desc}</p>
  </div>
);

const Home = () => {
  return (
    <main className=" mt-12 font-sans md: bg-white">
      <Navbar />
      {/* Banner */}
      <section className="md:mx-12 px-6 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text & Search */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-3xl xl:text-5xl font-bold text-[#252525] mb-4 leading-snug">
            Raih Karir Impianmu <br className="hidden md:block" /> Bersama{" "}
            <span className="text-[#55BACC]">Jembatan Karir</span>
          </h2>
          <p className="text-gray-600 max-w-md mx-auto md:mx-0 mb-4">
            Temukan lowongan terbaik, jangkau perusahaan terkemuka, dan mulai
            perjalanan suksesmu hari ini.
          </p>

          <div className="flex flex-wrap md:flex-nowrap items-center gap-2 justify-center md:justify-start">
            <input
              type="text"
              placeholder="Cari pekerjaan impianmu"
              className="border border-gray-300 px-4 py-2 rounded-lg w-full md:w-72 flex-grow focus:outline-none focus:ring-2 focus:ring-[#55BACC]"
            />
            <button className="bg-[#55BACC] text-white px-6 py-2 rounded-lg hover:bg-[#4DA7B8] transition w-full md:w-auto">
              Cari
            </button>
          </div>

          <div className="flex gap-2 mt-4 flex-wrap justify-center md:justify-start">
            <span className="bg-[#E0F4F8] text-[#268B9F] text-sm px-3 py-1 rounded-full">
              Tersedia untuk semua
            </span>
            <span className="bg-[#F1F5F9] text-gray-600 text-sm px-3 py-1 rounded-full">
              100+ perusahaan aktif
            </span>
          </div>
        </div>

        {/* Ilustrasi Banner */}
        <div className="flex justify-center flex-1">
          <img
            src={Banner1}
            alt="Ilustrasi Bekerja"
            className="w-full max-w-lg object-contain"
          />
        </div>
      </section>

      {/* Alasan */}
      <section className="py-20 px-6 md:px-20 ">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Mengapa Harus Jembatan Karir
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Empat alasan utama yang membuat Jembatan Karir menjadi pilihan
            terbaik untuk membangun karirmu, khususnya untuk teman-teman
            disabilitas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {alasan.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-24 w-24 mb-4 rounded-full"
              />
              <h3 className="text-lg font-semibold text-[#252525] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Langkah */}
      <section className="bg-[#ebf9fc] py-16 px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <img
            src={Banner2}
            alt="Ilustrasi proses melamar kerja"
            className="w-48 md:w-72 object-contain"
          />
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
              Menuju Karirmu, Cuma 4 Langkah!
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Mulai perjalananmu menuju dunia kerja inklusif dan terbuka untuk
              semua.
            </p>
            <ol className="space-y-5">
              {langkah.map((step, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#55BACC] text-white rounded-full flex items-center justify-center text-lg font-bold shadow-md">
                    {idx + 1}
                  </div>
                  <p className="ml-4 text-gray-700 text-base leading-relaxed">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      {/* Komunitas */}
      <section className="py-16 px-8 bg-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Dukungan dan Komunitas
          </h2>
          <p className="text-gray-600">
            Mitra dan komunitas yang mendukung kemajuanmu
          </p>
        </div>

        <Slider {...settings}>
          {sliderImages.map((img, index) => (
            <div key={index} className="flex justify-center items-center px-4">
              <img
                src={img}
                alt={`partner-${index}`}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* Testimoni */}
      <section className="bg-white py-16 px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Apa Kata Mereka?</h2>
          <p className="text-gray-600">
            Cerita mereka yang telah sukses bersama Jembatan Karir
          </p>
        </div>

        <Slider {...testimonialSettings}>
          {testimonies.map((item, index) => (
            <div key={index} className="px-4 h-full">
              <div
                className="bg-gray-100 rounded-xl shadow-md p-6 h-full flex flex-col items-center text-center"
                aria-label={`Testimoni dari ${item.name}`}
              >
                <img
                  src={item.img}
                  alt={`Foto ${item.name}`}
                  className="rounded-full w-20 h-20 mb-4 object-cover"
                />
                <p className="text-gray-700 italic text-sm flex-1">
                  “{item.quote}”
                </p>
                <p className="mt-4 font-semibold text-gray-800">{item.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className="relative overflow-hidden py-20 px-6 md:px-20 mx-8 rounded-xl md:mx-12 text-white text-center">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#55BACC] to-[#268B9F] z-0" />

        {/* Ornamen SVG Lingkaran */}
        <div className="absolute top-0 right-0 opacity-20 z-0">
          <svg width="300" height="300">
            <circle cx="150" cy="150" r="120" fill="white" />
          </svg>
        </div>

        {/* Ornamen Gelombang Bawah */}
        <div className="absolute bottom-0 left-0 right-0 opacity-10 z-0">
          <svg
            viewBox="0 0 1440 320"
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L40,229.3C80,235,160,245,240,224C320,203,400,149,480,144C560,139,640,181,720,192C800,203,880,181,960,176C1040,171,1120,181,1200,181.3C1280,181,1360,171,1400,165.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Konten CTA */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            Siap Memulai Karirmu?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Bergabunglah bersama ribuan pencari kerja lainnya yang telah
            menemukan peluang baru bersama Jembatan Karir — platform yang
            inklusif untuk semua.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-[#268B9F] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
              aria-label="Daftar sekarang di Jembatan Karir"
            >
              Daftar Sekarang
            </button>
            <button
              className="border border-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#268B9F] transition"
              aria-label="Pelajari lebih lanjut tentang Jembatan Karir"
            >
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>
      <Footer  />
    </main>
  );
};

export default Home;
