import React from 'react'

const StatDosen = () => {
    const laporanData = [
        { email: 'dimaskuncoro@gmail.com', status: 'Dosen', department: 'Bisnis dan hospitality', tanggal: '06 Agustus 2023' },
        { email: 'argyaWira@gmail.com', status: 'Dosen', department: 'Industri kreatif dan digital', tanggal: '06 Agustus 2023' },
        { email: 'muhammadNaufalSaiful@gmail.com', status: 'Dosen', department: 'Bisnis dan hospitality', tanggal: '06 Agustus 2023' },
        { email: 'rakaFredaSandimeru@gmail.com', status: 'Dosen', department: 'Bisnis dan hospitality', tanggal: '06 Agustus 2023' },
        { email: 'akhmadDicky@gmail.com', status: 'Dosen', department: 'Industri kreatif dan digital', tanggal: '06 Agustus 2023' },
        { email: 'tegarhendrawan@gmail.com', status: 'Dosen', department: 'Bisnis dan hospitality', tanggal: '06 Agustus 2023' },
        { email: 'ferdianPaleka@gmail.com', status: 'Dosen', department: 'Industri kreatif dan digital', tanggal: '06 Agustus 2023' },
        { email: 'Imanuelamandio@gmail.com', status: 'Dosen', department: 'Industri kreatif dan digital', tanggal: '06 Agustus 2023' },
    ];

    return (
        <div className='flex flex-col justify-center'>
            <div className='flex flex-col'>
                <h1 className='text-[#000] text-[32px] font-bold mb-6'>Laporan Masuk</h1>
                <table className='w-full text-left text-[#000000]'>
                    <thead>
                        <tr className='border-b-2 border-[#000]'>
                            <th className='py-2'>Email</th>
                            <th className='py-2 text-center'>Status</th>
                            <th className='py-2 text-center'>Department</th>
                            <th className='py-2 text-center'>Tanggal</th>
                        </tr>
                    </thead>
                    <tbody className='font-medium'>
                        {laporanData.map((laporan, index) => (
                            <tr key={index}>
                                <td className='py-3'>{laporan.email}</td>
                                <td className='py-3 text-center'>{laporan.status}</td>
                                <td className='py-3 text-center'>{laporan.department}</td>
                                <td className='py-3 text-center'>{laporan.tanggal}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StatDosen
