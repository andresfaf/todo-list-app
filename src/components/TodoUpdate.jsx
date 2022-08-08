import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TareaContext } from '../context/TareaContext';

export const TodoUpdate = () => {

  const { open, handleClose, actualizarTarea, onChangeUpdateTarea, puTarea } = useContext(TareaContext);

  const {idTarea, descripcion, estado} = actualizarTarea;

  return (
    <Dialog open={open} onClose={handleClose} maxWidth='md' fullWidth>
      <DialogTitle>Actualizar tarea</DialogTitle>
      <DialogContent>
        <TextField
          value={descripcion}
          autoFocus
          margin="dense"
          id="idPutTarea"
          name="descripcion"
          label="Tarea"
          fullWidth
          variant="outlined"
          onChange={onChangeUpdateTarea}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cerrar</Button>
        <Button onClick={() => {
          puTarea(idTarea, descripcion, estado);
          handleClose();
        }}>Actualizar</Button>
      </DialogActions>
    </Dialog>
  )
}
