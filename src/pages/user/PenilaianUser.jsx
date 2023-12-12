import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2';
import axios from 'axios';
import { format } from 'date-fns';
import enUSLocale from 'date-fns/locale/en-US';
const PenilaianUser = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const email = sessionStorage.getItem('email');
  const role = sessionStorage.getItem('role');
  const departement = sessionStorage.getItem('department');
  const question1 = sessionStorage.getItem('jawabanPertanyaan1');
  const question2 = sessionStorage.getItem('jawabanPertanyaan2');
  const question3 = sessionStorage.getItem('jawabanPertanyaan3');
  const suggestion = sessionStorage.getItem('kritikSaran');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const currentDate = new Date();
      const formattedDate = format(currentDate, 'yyyy-MM-dd', { locale: enUSLocale });
      const apiEndpoint = 'https://besmartindonesiagemilang.com/rest-api-survey/insert.php';
      const response = await axios.post(apiEndpoint, {
        email: email,
        departement: departement,
        question1: question1,
        question2: question2,
        question3: question3,
        rating: rating,
        review: review,
        role: role,
        created: formattedDate,
        suggestion: suggestion,
      });

      if (response.status === 200) {
        sessionStorage.clear();
        Swal.fire({
          title: 'Success!',
          text: 'Thank you for your feedback!',
          icon: 'success',
        });
      } else {
        throw new Error(`Failed to submit survey. Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting survey:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to submit survey. Please try again later.',
        icon: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      <div className="p-5 bg-[#D5D5D5] mx-auto rounded-[10px] my-auto w-full md:w-[1000px]">
        <h1 className="md:text-[40px] text-[28px] uppercase text-center text-[#000] font-bold mb-4">Penilaian dan Saran</h1>
        <form onSubmit={handleSubmit} className="mb-6 flex md:px-[104px] flex-col">
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
              className="block p-2 rounded-lg w-full mt-1"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#EDAA2D] w-full md:w-[80%] mt-5 mb-10 mx-auto uppercase text-[#000] font-medium text-2xl py-2 px-6 rounded-md hover:bg-[#D29100] focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </main>
  );
};

export default PenilaianUser;
