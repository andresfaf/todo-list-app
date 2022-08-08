import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { TareaContext } from '../context/TareaContext';
import TodoItem from '../components/TodoItem';
import { Grid, Typography } from '@mui/material';

const TodoList = () => {

  const { getTareas, tareas } = useContext(TareaContext);

  useEffect(() => {
    getTareas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Grid item md={12}> <Typography variant='h5' align='center'>Lista de tareas</Typography> </Grid>
      {
        tareas.map(tarea => (
          <TodoItem key={tarea.idTarea} tarea={tarea} />
        ))
      }
    </>
  )
}

export default TodoList;
