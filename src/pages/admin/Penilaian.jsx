import React from 'react';
import CardPenilaian from '../../components/CardPenilaian';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// eslint-disable-next-line react-refresh/only-export-components
export const data = {
  labels: ['  1', '2', '3', '4', '5'],
  datasets: [
    {
      label: 'Rating',
      data: [1, 1, 1, , 2],
      backgroundColor: [
        '#5FBDFF',
        '#FF5B22',
        '#B6BBC4',
        '#F4F27E',
        '#B31312',
      ],
      borderColor: [
        '#5FBDFF',
        '#FF5B22',
        '#B6BBC4',
        '#F4F27E',
        '#B31312',
      ],
      widtgh: 1,
      borderWidth: 1,
    },
  ],
};
const Penilaian = () => {
  const dataPenilaianSaran = [
    {
      nama: 'Vera',
      penilaian: 5,
      saran: 'Aplikasi survey kepuasan ini cukup mudah digunakan. Aplikasi survey kepuasan ini cukup mudah digunakan.',
    },
    {
      nama: 'Dimas Rifqi',
      penilaian: 3,
      saran: 'Aplikasi survey kepuasan ini cukup mudah digunakan.',
    },
    {
      nama: 'Maulana',
      penilaian: 5,
      saran: 'Aplikasi survey kepuasan ini cukup mudah digunakan. Aplikasi survey kepuasan ini cukup mudah digunakan.',
    },
    {
      nama: 'Amar',
      penilaian: 4,
      saran: 'Aplikasi survey kepuasan ini cukup mudah digunakan.',
    },
    {
      nama: 'Firdaus',
      penilaian: 1,
      saran: 'Aplikasi survey kepuasan ini cukup mudah digunakan.',
    },
    {
      nama: 'Bonge',
      penilaian: 2,
      saran: 'Aplikasi survey kepuasan ini cukup mudah digunakan.',
    },
  ];
  return (
    <div className='flex h-full overflow-auto'>
      <div className="flex flex-col space-y-4">
        {dataPenilaianSaran.map((item, index) => (
          <CardPenilaian
            key={index}
            nama={item.nama}
            penilaian={item.penilaian}
            saran={item.saran}
          />
        ))}
      </div>
      <div>
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default Penilaian;
