import { addDoc, collection } from 'firebase/firestore';
import { db } from '../Firebase/firebase';

export const register = async (email, password, fullName, role) => {
    try {
        const userRef = await addDoc(collection(db, 'users'), {
            email,
            password,
            fullName,
            role
        });
        return { success: true, userId: userRef.id };
    } catch (error) {
        return { success: false, error: error.message };
    }
}