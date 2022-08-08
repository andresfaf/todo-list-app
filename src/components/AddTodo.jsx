import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { TareaContext } from '../context/TareaContext';

const AddTodo = () => {

  const { postTarea, onChangeTarea, tarea } = useContext(TareaContext);

  return (
    <>
      <Grid mt={4} container spacing={2} >
        <Grid item md={12}>
          <TextField
            value={tarea.descripcion}
            fullWidth
            id='idPostTarea'
            label="Ingresar tarea"
            name='descripcion'
            onChange={onChangeTarea}
          />
        </Grid>
        <Grid item md={12}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => postTarea()}
            startIcon={<AddIcon fontSize='large' />}
          >
            Agregar tarea
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default AddTodo;
