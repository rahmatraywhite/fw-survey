import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';
import Swal from 'sweetalert2';

const Pertanyaan = ({ id, question, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState(question);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editedQuestionDialog, setEditedQuestionDialog] = useState('');

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

  const handleOpenEditDialog = () => {
    setEditedQuestionDialog(question);
    setIsEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setIsEditDialogOpen(false);
  };

  const handleEditQuestion = async () => {
    onEdit(id, editedQuestionDialog);
    setIsEditDialogOpen(false);
  };

  return (
    <div className="rounded-md my-2">
      <div className="flex flex-col rounded-md items-end bg-[#D9D9D9]">
        <div className="bg-[#EDAA2D] w-[40px] h-[40px] font-bold flex items-center justify-center text-white rounded-l-[8px]">
          {id}
        </div>
        <div className="">
          {isEditDialogOpen ? (
            <Dialog
              open={isEditDialogOpen}
              onClose={handleCloseEditDialog}
              maxWidth="xs"
              fullWidth>
              <DialogTitle className="bg-[#253A59] text-center text-white">
                Edit Pertanyaan
              </DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  label="Pertanyaan"
                  type="text"
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  value={editedQuestionDialog}
                  onChange={(e) => setEditedQuestionDialog(e.target.value)}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseEditDialog} color="inherit">
                  Batal
                </Button>
                <Button onClick={handleEditQuestion} color="primary">
                  Simpan
                </Button>
              </DialogActions>
            </Dialog>
          ) : (
            <div className="text-xl p-2 text-left">{question}</div>
          )}
        </div>
        <div className="flex items-center bg-[#EDAA2D] w-[80px] h-[40px] font-bold justify-between gap-2 px-4 rounded-l-[8px] text-white">
          <button
            onClick={handleOpenEditDialog}
            className="text-white text-2xl">
            <FaEdit />
          </button>
          <button onClick={() => onDelete(id)} className="text-white text-2xl">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

const PertanyaanPage = () => {
  const [pertanyaanList, setPertanyaanList] = useState([]);
  const [totalPertanyaan, setTotalPertanyaan] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://besmartindonesiagemilang.com/rest-api-survey/pertanyaan.php'
        );
        const pertanyaanData = response.data;

        const pertanyaanFromReview = pertanyaanData.map((item, index) => ({
          id: item.id,
          question: item.pertanyaan,
        }));

        setPertanyaanList(pertanyaanFromReview);
        setTotalPertanyaan(pertanyaanFromReview.length);
      } catch (error) {
        console.error('Error fetching pertanyaan data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEditQuestion = async (id, editedQuestion) => {
    try {
      await axios.put(
        'https://besmartindonesiagemilang.com/rest-api-survey/pertanyaan.php',
        {
          id: id,
          pertanyaan: editedQuestion,
        }
      );

      const updatedPertanyaanList = pertanyaanList.map((item) =>
        item.id === id ? { ...item, question: editedQuestion } : item
      );
      setPertanyaanList(updatedPertanyaanList);
    } catch (error) {
      console.error('Error updating question:', error);
    }
  };

  const handleDeleteQuestion = async (id) => {
    try {
      await axios.delete(
        'https://besmartindonesiagemilang.com/rest-api-survey/pertanyaan.php',
        {
          data: { id: id },
        }
      );

      const updatedPertanyaanList = pertanyaanList.filter(
        (item) => item.id !== id
      );
      setPertanyaanList(updatedPertanyaanList);
      setTotalPertanyaan((prevTotal) => prevTotal - 1);
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  const handleSubmit = () => {
    const pertanyaanData = pertanyaanList.map((item) => ({
      id: item.id,
      pertanyaan: item.question,
    }));
    axios
      .post(
        'https://besmartindonesiagemilang.com/rest-api-survey/pertanyaan.php',
        pertanyaanData
      )
      .then((response) => {
        Swal.fire({
          title: 'Success!',
          text: 'Pertanyaan submitted successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to submit pertanyaan.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
        console.error('Error submitting pertanyaan:', error);
      });
  };

  return (
    <div className="bg-[#253A59] flex flex-col space-y-5 overflow-auto h-full rounded-md p-5">
      <div className="space-y-3 overflow-y-auto">
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
      <div className="flex justify-between items-center">
        <button
          onClick={handleSubmit}
          className="bg-[#EDAA2D] text-white w-[120px] py-2 px-3 rounded-md">
          Submit
        </button>
        <div className="text-white">Total Pertanyaan: {totalPertanyaan}</div>
      </div>
    </div>
  );
};

export default PertanyaanPage;
