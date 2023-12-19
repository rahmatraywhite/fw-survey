import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuthentication = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const email = sessionStorage.getItem('email');
        const role = sessionStorage.getItem('role');

        if (!email) {
            // Jika email tidak ada, redirect ke /dashboard
            navigate('/dashboard');
        } else if (role === 'admin' || role === 'superadmin') {
            // Jika role adalah admin atau superadmin, biarkan akses
            // Sesuai dengan kebutuhan, Anda dapat menyesuaikan kondisi ini
            console.log(`Welcome, ${role}!`);
        } else {
            // Jika role tidak sesuai, redirect ke /admin
            navigate('/admin');
        }
    }, [navigate]); // Pastikan untuk menyertakan navigate di dependencies untuk menghindari peringatan lint

    // Anda dapat mengembalikan nilai role jika diperlukan di komponen yang menggunakan hook ini
    // return role;
};
