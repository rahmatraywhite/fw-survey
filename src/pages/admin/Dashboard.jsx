import React from 'react'
import CardUser from '../../components/CardUser'

const Dashboard = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold'>Overview Pengisi Survey</h1>
            <div className='grid grid-cols-3 mt-4 gap-4'>
                <CardUser name="Mahasiswa" length={79} />
                <CardUser name="Dosen" length={20} />
                <CardUser name="Tendik" length={35} />
            </div>
            <h1 className='text-3xl font-bold my-4'>Statistic</h1>
            <p>Civitas Academic</p>

        </div>
    )
}

export default Dashboard
