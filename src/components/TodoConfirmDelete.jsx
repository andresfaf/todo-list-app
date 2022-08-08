import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { TareaContext } from '../context/TareaContext';

export const TodoConfirmDelete = () => {

  const { openDelete, handleCloseDelete, actualizarTarea, deleteTarea } = useContext(TareaContext);

  const { idTarea } = actualizarTarea;

  return (
    <Dialog open={openDelete} onClose={handleCloseDelete} maxWidth='sm' fullWidth>
      <DialogTitle>¿Esta seguro de eliminar esta tarea?</DialogTitle>
      <DialogActions>
        <Button onClick={handleCloseDelete}>Cerrar</Button>
        <Button onClick={() => {
          deleteTarea(idTarea);
          handleCloseDelete();
        }}>Eliminar</Button>
      </DialogActions>
    </Dialog>
  )
}
