import React from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Filtros from '../components/Filtros';
import { Container, Grid } from '@mui/material';

const HomePage = () => {


  return (
    <>
      <Container maxWidth='xl'>
        <Filtros />
        <Grid container spacing={2}>
          
          <Grid item md={5}>
            <AddTodo />
          </Grid>

          <Grid item md={7}>
            <TodoList />
          </Grid>

        </Grid>
      </Container>
    </>
  )
}

export default HomePage;
