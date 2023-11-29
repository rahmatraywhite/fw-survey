import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom';

const SurveyUser = () => {
    const [jawabanPertanyaan1, setJawabanPertanyaan1] = useState(0);
    const [jawabanPertanyaan2, setJawabanPertanyaan2] = useState(0);
    const [jawabanPertanyaan3, setJawabanPertanyaan3] = useState(0);
    const [kritikSaran, setKritikSaran] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/penilaian-user');
        console.log({
            jawabanPertanyaan1,
            jawabanPertanyaan2,
            jawabanPertanyaan3,
            kritikSaran,
        });

        setJawabanPertanyaan1(0);
        setJawabanPertanyaan2(0);
        setJawabanPertanyaan3(0);
        setKritikSaran('');
    };

    return (
        <main className="h-screen flex flex-col">
            <Navbar />
            <div className="p-5 bg-[#D5D5D5] mx-auto my-auto rounded-[10px] w-[1000px]">
                <h1 className="text-5xl text-center text-[#000] font-bold mb-4">SURVEY KEPUASAN</h1>
                <p className="text-[20px] text-center font-bold mb-6">
                    Isilah survey kepuasan dibawah ini terhadap layanan dan fasilitas yang ada di Fakultas Vokasi Universitas Brawijaya.
                </p>
                <form onSubmit={handleSubmit} className="mb-6">
                    <div className="mb-4">
                        <label className="block text-lg font-bold text-[#000] ">
                            Kemampuan menggunakan beragam teknologi komunikasi dan memanfaatkan media dan teknologi pembelajaran
                        </label>
                        <div className="flex items-center mt-2">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <label key={value} className={`flex items-center mr-4 cursor-pointer`}>
                                    <input
                                        type="radio"
                                        value={value}
                                        checked={jawabanPertanyaan1 === value}
                                        onChange={() => setJawabanPertanyaan1(value)}
                                        className="hidden"
                                    />
                                    <div className={`w-[60px] text-lg font-bold    h-[60px] border rounded-full border-[#EDAA2D] flex items-center justify-center ${jawabanPertanyaan1 === value ? 'bg-[#EDAA2D] text-white' : ''}`}>
                                        {value}
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-bold text-[#000] ">
                            Penggunaan hasil-hasil penelitian untuk meningkatkan kualitas perkuliahan
                        </label>
                        <div className="flex items-center mt-2">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <label key={value} className={`flex items-center mr-4 cursor-pointer`}>
                                    <input
                                        type="radio"
                                        value={value}
                                        checked={jawabanPertanyaan2 === value}
                                        onChange={() => setJawabanPertanyaan2(value)}
                                        className="hidden"
                                    />
                                    <div className={`w-[60px] h-[60px] text-lg font-bold border rounded-full border-[#EDAA2D] flex items-center justify-center ${jawabanPertanyaan2 === value ? 'bg-[#EDAA2D] text-white' : ''}`}>
                                        {value}
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-bold text-[#000] ">
                            Kejelasan penyampaian materi dan jawaban terhadap pertanyaan di kelas
                        </label>
                        <div className="flex items-center mt-2">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <label key={value} className={`flex items-center mr-4 cursor-pointer`}>
                                    <input
                                        type="radio"
                                        value={value}
                                        checked={jawabanPertanyaan3 === value}
                                        onChange={() => setJawabanPertanyaan3(value)}
                                        className="hidden"
                                    />
                                    <div className={`w-[60px] h-[60px] text-lg font-bold border rounded-full border-[#EDAA2D] flex items-center justify-center ${jawabanPertanyaan3 === value ? 'bg-[#EDAA2D] text-white' : ''}`}>
                                        {value}
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="kritikSaran" className="block text-lg font-bold text-[#000]">
                            Kritik dan Saran
                        </label>
                        <textarea
                            id="kritikSaran"
                            name="kritikSaran"
                            value={kritikSaran}
                            onChange={(e) => setKritikSaran(e.target.value)}
                            rows="4"
                            className="block w-full mt-1"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-[#EDAA2D] text-[#000] font-medium text-2xl py-2 px-6 rounded-md hover:bg-[#D29100] focus:outline-none focus:shadow-outline"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        </main>
    )
}

export default SurveyUser
