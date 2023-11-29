import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { FaStar } from "react-icons/fa";

const PenilaianUser = () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            rating,
            review,
        });
    };
    return (
        <main className="h-screen flex flex-col">
            <Navbar />
            <div className="p-5 bg-[#D5D5D5] mx-auto rounded-[10px] my-auto w-[1000px]">
                <h1 className="text-[40px] uppercase text-center text-[#000] font-bold mb-4">Penilaian dan Saran</h1>
                <form onSubmit={handleSubmit} className="mb-6 flex px-[104px] flex-col">
                    <div className="mb-4 flex items-center justify-center">
                        {[1, 2, 3, 4, 5].map((value) => (
                            <label key={value} className="mr-2 cursor-pointer">
                                <input
                                    type="radio"
                                    value={value}
                                    checked={rating === value}
                                    onChange={() => setRating(value)}
                                    className="hidden"
                                />
                                <div className={`text-[40px] flex items-center justify-center ${rating >= value ? 'text-[#EDAA2D]' : ''}`}>
                                    {rating >= value ? <FaStar /> : <FaStar className="text-[#fff]" />}
                                </div>
                            </label>
                        ))}
                    </div>
                    <p className="text-[14px] text-[#fff] text-center font-light mb-6">Leave your review</p>
                    <div className="mb-4">
                        <textarea
                            id="review"
                            name="review"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            rows="10"
                            className="block rounded-lg w-full mt-1"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-[#EDAA2D] w-[80%] mt-5 mb-10 mx-auto uppercase text-[#000] font-medium text-2xl py-2 px-6 rounded-md hover:bg-[#D29100] focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </main>
    )
}

export default PenilaianUser
