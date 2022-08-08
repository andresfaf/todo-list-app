import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, Typography, Grid, Button } from '@mui/material';
import { TareaContext } from '../context/TareaContext';
import { useContext } from 'react';
import { TodoUpdate } from './TodoUpdate';
import { TodoConfirmDelete } from './TodoConfirmDelete';

const TodoItem = ({ tarea }) => {


  const { handleClickOpen, onUpdateTarea, puTarea, handleClickOpenDelete } = useContext(TareaContext);

  const { idTarea, descripcion, estado } = tarea;


  return (
    <>
      <Grid container spacing={0} sx={{ border: '1px solid #c2c2c2', borderRadius: 1, padding: 1 }} mt={2} alignItems='center' >
        <Grid item md={1}>
          <Checkbox
            checked={estado ? true : false}
            onChange={() => puTarea(idTarea, descripcion, !estado)}
          />
        </Grid>
        <Grid item md={9}>
          <Typography align='left' sx={{ textDecoration: estado ? 'line-through' : 'none' }}>{descripcion}</Typography>
        </Grid>
        <Grid item md={1}>
          <Typography align='center'>
            <Button
              sx={{ background: 'green' }}
              variant="contained"
              onClick={() => {
                onUpdateTarea(idTarea, descripcion, estado);
                handleClickOpen();
              }}
            >
              <EditIcon />
            </Button>
          </Typography>
        </Grid>
        <Grid item md={1}>
          <Typography align='center'>
            <Button
              variant="contained"
              sx={{ background: 'red' }}
              onClick={() => {
                onUpdateTarea(idTarea, descripcion, estado);
                handleClickOpenDelete();
              }}
            >
              <DeleteIcon />
            </Button>
          </Typography>
        </Grid>
      </Grid>

      <TodoUpdate />
      <TodoConfirmDelete />
    </>
  )
}

export default TodoItem;
