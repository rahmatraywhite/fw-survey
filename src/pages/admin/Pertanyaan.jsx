import React, { useState } from 'react';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';

const Pertanyaan = ({ id, question, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedQuestion, setEditedQuestion] = useState(question);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onEdit(id, editedQuestion);
        setIsEditing(false);
    };

    const handleDelete = () => {
        onDelete(id);
    };


    return (
        <div className='rounded-md my-2'>
            <div className="flex flex-col rounded-md items-end bg-[#D9D9D9]">
                <div className="bg-[#EDAA2D] w-[40px] h-[40px] font-bold flex items-center justify-center text-white rounded-l-[8px]">{id}</div>
                <div className="">
                    {isEditing ? (
                        <input
                            autoFocus
                            type="text"
                            value={editedQuestion}
                            onChange={(e) => setEditedQuestion(e.target.value)}
                            className="border border-gray-300 text-xl p-4 h-16 w-full"
                        />
                    ) : (
                        <div className='text-xl p-2 text-left'>{question}</div>
                    )}
                </div>
                <div className="flex items-center bg-[#EDAA2D] w-[80px] h-[40px] font-bold justify-between gap-2 px-4 rounded-l-[8px] text-white">
                    {isEditing ? (
                        <button onClick={handleSave} className="text-white text-2xl">
                            <FaSave />
                        </button>
                    ) : (
                        <button onClick={handleEdit} className="text-white text-2xl">
                            <FaEdit />
                        </button>
                    )}
                    <button onClick={handleDelete} className="text-white text-2xl">
                        <FaTrash />
                    </button>
                </div>
            </div>
        </div>
    );
};

const PertanyaanPage = () => {
    const [pertanyaanList, setPertanyaanList] = useState([
        { id: 1, question: 'Kemampuan menjelaskan keterkaitan bidang, topik yang diajarkan dengan bidang, topik lain dan dengan konteks kehidupan' },
        { id: 2, question: 'Kemampuan menjelaskan keterkaitan bidang, topik yang diajarkan dengan bidang, topik lain dan dengan konteks kehidupan' },
        { id: 3, question: 'Kemampuan menjelaskan keterkaitan bidang, topik yang diajarkan dengan bidang, topik lain dan dengan konteks kehidupan' },
        { id: 4, question: 'Kemampuan menjelaskan keterkaitan bidang, topik yang diajarkan dengan bidang, topik lain dan dengan konteks kehidupan' },
        { id: 5, question: 'Kemampuan menjelaskan keterkaitan bidang, topik yang diajarkan dengan bidang, topik lain dan dengan konteks kehidupan' },
        { id: 6, question: 'Kemampuan menjelaskan keterkaitan bidang, topik yang diajarkan dengan bidang, topik lain dan dengan konteks kehidupan' },
        { id: 7, question: 'Kemampuan menjelaskan keterkaitan bidang, topik yang diajarkan dengan bidang, topik lain dan dengan konteks kehidupan' },
    ]);

    const handleEditQuestion = (id, editedQuestion) => {
        const updatedPertanyaanList = pertanyaanList.map((item) =>
            item.id === id ? { ...item, question: editedQuestion } : item
        );
        setPertanyaanList(updatedPertanyaanList);
    };

    const handleDeleteQuestion = (id) => {
        const updatedPertanyaanList = pertanyaanList.filter((item) => item.id !== id);
        setPertanyaanList(updatedPertanyaanList);
    };

    const handleSubmit = () => {
        console.log('Submitting questions:', pertanyaanList);
    };

    return (
        <div className='bg-[#253A59] flex flex-col space-y-5 overflow-auto h-full rounded-md p-5'>
            <div className='space-y-3 overflow-y-auto'>
                {pertanyaanList.map((pertanyaan) => (
                    <Pertanyaan
                        key={pertanyaan.id}
                        id={pertanyaan.id}
                        question={pertanyaan.question}
                        onEdit={handleEditQuestion}
                        onDelete={handleDeleteQuestion}
                    />
                ))}
            </div>
            <button
                onClick={handleSubmit}
                className='bg-[#EDAA2D] text-white w-[120px] py-2 px-3 rounded-md'
            >
                Submit
            </button>
        </div>


    );
};

export default PertanyaanPage;
