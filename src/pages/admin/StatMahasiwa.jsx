import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';

const fetchData = async () => {
    const response = await axios.get('https://besmartindonesiagemilang.com/rest-api-survey/data.php');
    return response;
};

const StatMahasiswa = () => {
    const [data, setData] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(10);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchDataAsync = async () => {
            const result = await fetchData();
            const mahasiswaData = result.data.filter((row) => row.role.toLowerCase() === 'mahasiswa');
            setData(mahasiswaData);

            const totalItems = mahasiswaData.length;
            const perPage = 10;
            const calculatedTotalPages = Math.ceil(totalItems / perPage);
            setTotalPages(calculatedTotalPages);
        };

        fetchDataAsync();
    }, []);

    const handleChangePage = (event, newPage) => {
        const perPage = 10;
        const newStartIndex = (newPage - 1) * perPage;
        const newEndIndex = newStartIndex + perPage - 1;

        setStartIndex(newStartIndex);
        setEndIndex(newEndIndex);
    };

    return (
        <div className='flex flex-col items-start h-full'>
            <h1 className="text-2xl text-left font-bold">Laporan Masuk</h1>
            <TableContainer sx={{ width: '100%' }} component={Paper} className="my-4">
                <Table>
                    <TableHead>
                        <TableRow className='bg-gray-200' style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                            <TableCell>Email</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Department</TableCell>
                            <TableCell>Tanggal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(startIndex, endIndex + 1).map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.email}</TableCell>
                                <TableCell className='capitalize'>{row.role}</TableCell>
                                <TableCell className='capitalize'>{row.departement}</TableCell>
                                <TableCell>{row.created}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination
                count={totalPages}
                onChange={handleChangePage}
                shape="rounded"
                className="my-4"
            />
        </div>
    );
};

export default StatMahasiswa;

