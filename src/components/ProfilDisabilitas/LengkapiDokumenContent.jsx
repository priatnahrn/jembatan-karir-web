import React, { useState } from "react";
import { Info, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LengkapiDokumenContent = () => {
  const navigate = useNavigate();
  const [cv, setCv] = useState(null);
  const [ktp, setKtp] = useState(null);
  const [skd, setSkd] = useState(null);

  const handleFileChange = (setter) => (e) => {
    if (e.target.files.length > 0) {
      setter(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const confirm = window.confirm(
      "Apakah Anda yakin dokumen yang dimasukkan telah sesuai?"
    );
    if (confirm) {
      alert("Dokumen berhasil disimpan (simulasi)");
    }
  };

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
        Lengkapi Dokumen
      </h2>

      <div className="flex items-start p-4 gap-4 rounded-xl text-yellow-700 bg-yellow-100 border border-yellow-300 my-4">
        <Info className="text-yellow-500 text-xl" />
        <p className="text-sm md:text-base">
          Lengkapi dokumen Anda disini. Pastikan dokumen yang Anda lampirkan
          sesuai dengan ketentuan.
        </p>
      </div>

      <form className="space-y-6">
        <div>
          <label
            htmlFor="cv"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Unggah CV/Resume
          </label>
          <div className="p-5 rounded-md bg-white border border-gray-200 text-center">
            <input
              type="file"
              id="cv"
              onChange={handleFileChange(setCv)}
              accept=".pdf, .doc, .docx"
              className="hidden"
            />
            <label
              htmlFor="cv"
              className="cursor-pointer bg-[#55BACC] hover:bg-[#2991B7] text-white px-4 py-2 rounded-md"
            >
              {cv ? "Ubah CV" : "Pilih File"}
            </label>
            {cv && <p className="mt-2 text-sm text-gray-600">CV: {cv.name}</p>}
          </div>
        </div>

        <div>
          <label
            htmlFor="ktp"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            KTP <span className="text-[#55BACC] font-semibold">(Wajib)</span>
          </label>
          <div className="p-5 rounded-md bg-white border border-gray-200 text-center">
            <input
              type="file"
              id="ktp"
              onChange={handleFileChange(setKtp)}
              accept=".jpeg,.png"
              className="hidden"
            />
            <label
              htmlFor="ktp"
              className="cursor-pointer bg-[#55BACC] hover:bg-[#2991B7] text-white px-4 py-2 rounded-md"
            >
              {ktp ? "Ubah KTP" : "Pilih Gambar"}
            </label>
            {ktp && (
              <p className="mt-2 text-sm text-gray-600">KTP: {ktp.name}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="skd"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Surat Keterangan Disabilitas{" "}
            <span className="text-[#55BACC] font-semibold">(Wajib)</span>
          </label>
          <div className="p-5 rounded-md bg-white border border-gray-200 text-center">
            <input
              type="file"
              id="skd"
              onChange={handleFileChange(setSkd)}
              accept=".pdf, .doc, .docx, .jpeg, .png"
              className="hidden"
            />
            <label
              htmlFor="skd"
              className="cursor-pointer bg-[#55BACC] hover:bg-[#2991B7] text-white px-4 py-2 rounded-md"
            >
              {skd ? "Ubah Surat" : "Pilih File"}
            </label>
            {skd && (
              <p className="mt-2 text-sm text-gray-600">Surat: {skd.name}</p>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-[#55ABCC] hover:bg-[#2991B7] text-white py-2 px-4 rounded-md"
        >
          Simpan
        </button>
      </form>
    </div>
  );
};

export default LengkapiDokumenContent;
