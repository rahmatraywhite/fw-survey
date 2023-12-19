import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';

const SurveyUser = () => {
  const [pertanyaanList, setPertanyaanList] = useState([]);
  const [jawabanPertanyaan1, setJawabanPertanyaan1] = useState(0);
  const [jawabanPertanyaan2, setJawabanPertanyaan2] = useState(0);
  const [jawabanPertanyaan3, setJawabanPertanyaan3] = useState(0);
  const [kritikSaran, setKritikSaran] = useState('');
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://besmartindonesiagemilang.com/rest-api-survey/pertanyaan.php');
        const pertanyaanData = response.data;

        setPertanyaanList(pertanyaanData);
      } catch (error) {
        console.error('Error fetching pertanyaan data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi formulir
    const errors = {};
    if (jawabanPertanyaan1 === 0 || jawabanPertanyaan2 === 0 || jawabanPertanyaan3 === 0) {
      errors.form = 'Isi Semua Survey';
    }
    if (!kritikSaran.trim()) {
      errors.kritikSaran = 'Isi Kritik dan Saran Anda';
    }

    if (Object.keys(errors).length > 0) {
      setFormError(errors);
      return;
    }

    setFormError({});

    sessionStorage.setItem('jawabanPertanyaan1', jawabanPertanyaan1);
    sessionStorage.setItem('jawabanPertanyaan2', jawabanPertanyaan2);
    sessionStorage.setItem('jawabanPertanyaan3', jawabanPertanyaan3);
    sessionStorage.setItem('kritikSaran', kritikSaran);
    navigate('/penilaian-user');

    setJawabanPertanyaan1(0);
    setJawabanPertanyaan2(0);
    setJawabanPertanyaan3(0);
    setKritikSaran('');
  };

  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="p-8 bg-[#D5D5D5] mx-auto my-24  rounded-[10px] w-[350px] md:w-[800px]">
        <h1 className="md:text-3xl text-2xl text-center text-[#000] font-bold mb-[51px]">SURVEY KEPUASAN</h1>
        <p className="text-lg md:text-lg text-center font-medium mb-[75px]">
          Isilah survey kepuasan dibawah ini terhadap layanan dan fasilitas yang ada di Fakultas Vokasi Universitas Brawijaya.
        </p>
        <form onSubmit={handleSubmit} className="mb-6">
        {formError.form && (
            <p className="text-red-500 text-center text-sm mb-2">{formError.form}</p>
          )}
          {pertanyaanList.map((pertanyaan, index) => (
            <div key={index} className="mb-6">
              <label className="block text-base text-center md:text-left font-semibold text-[#000]">
                {pertanyaan.pertanyaan}
              </label>
              <div className="flex items-center mt-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <label key={value} className={`flex items-center mr-1 md:mr-4 cursor-pointer`}>
                    <input
                      type="radio"
                      value={value}
                      checked={index === 0 ? jawabanPertanyaan1 === value : index === 1 ? jawabanPertanyaan2 === value : jawabanPertanyaan3 === value}
                      onChange={() => index === 0 ? setJawabanPertanyaan1(value) : index === 1 ? setJawabanPertanyaan2(value) : setJawabanPertanyaan3(value)}
                      className="hidden"
                    />
                    <div className={`w-[55px] text-lg font-bold h-[55px] border rounded-full border-[#EDAA2D] flex items-center justify-center ${index === 0 ? jawabanPertanyaan1 === value ? 'bg-[#EDAA2D] text-white' : '' : index === 1 ? jawabanPertanyaan2 === value ? 'bg-[#EDAA2D] text-white' : '' : jawabanPertanyaan3 === value ? 'bg-[#EDAA2D] text-white' : ''}`}>
                      {value}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="mb-6">
            <label htmlFor="kritikSaran" className="block text-base font-semibold text-[#000]">
              Kritik dan Saran
            </label>
            <textarea
              id="kritikSaran"
              name="kritikSaran"
              value={kritikSaran}
              onChange={(e) => setKritikSaran(e.target.value)}
              rows="4"
              className={`block p-2 w-full mt-1 ${formError.kritikSaran ? 'border-red-500' : ''}`}
            ></textarea>
            {formError.kritikSaran && (
              <p className="text-red-500 text-center text-sm mt-1">{formError.kritikSaran}</p>
            )}
          </div>
         
          <button
            type="submit"
            className="bg-[#EDAA2D] text-[#000] w-full font-medium text-xl py-2 px-6 rounded-md hover:bg-[#D29100] focus:outline-none focus:shadow-outline"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </main>
  );
};

export default SurveyUser;
