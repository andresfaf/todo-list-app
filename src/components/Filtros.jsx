import React, { useContext } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Grid, Button, Typography } from '@mui/material';
import { TareaContext } from '../context/TareaContext';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useState } from 'react';

const Filtros = () => {

  const { filtroBinario, getTareas, estadoFiltro, setEstadoFiltro } = useContext(TareaContext);



  return (
    <>
      <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="flex-end" mt={2}>
        <Grid item md={3}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label"><Typography variant='h5'>Filtro</Typography></FormLabel>
            <RadioGroup row
              value={estadoFiltro}
              onChange={(e, value) => {
                let estado = value === 'true' ? true : false;
                setEstadoFiltro(estado);
                filtroBinario(estado);
              }}
            >
              <FormControlLabel value={true} control={<Radio />} label="Completadas" />
              <FormControlLabel value={false} control={<Radio />} label="No completadas" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item md={2}>
          <Button
            onClick={() => {
              setEstadoFiltro(null);
              getTareas();
            }}
            startIcon={<RestartAltIcon fontSize='large' />}
            variant="contained">
            Restablecer
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Filtros;
