import { useState } from "react";
import { TareaContext } from "../context/TareaContext";
import { URL } from '../utils';
import SwalAlert from "../components/SwalAlert";

const TareaProvider = ({ children }) => {

  const [tareas, setTareas] = useState([]);

  const [tarea, setTarea] = useState({
    idTarea: '',
    idLista: '',
    descripcion: '',
    fechaCreacion: '',
    estado: false
  })

  const [actualizarTarea, setActualizarTarea] = useState({
    idTarea: '',
    descripcion: '',
    estado: null
  })

  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [estadoFiltro, setEstadoFiltro] = useState(null)

  const getTareas = async () => {
    fetch(`${URL}/tarea`)
      .then(response => response.json())
      .then(response => {
        setTareas(response);
      })
  }

  const postTarea = async () => {
    if (!tarea.descripcion.trim()) {
      document.getElementById('idPostTarea').focus();
      SwalAlert('info', 'Ingresar una tarea', 1000);
    } else {
      const data = {
        idLista: null,
        descripcion: tarea.descripcion,
        fechaCreacion: new Date(),
        estado: false
      }

      const requestOptions = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      };

      fetch(`${URL}/tarea`, requestOptions)
        .then(response => response.json())
        .then(() => {
          getTareas();
          limpiarTarea();
          setEstadoFiltro(null);
          SwalAlert('success', 'Tarea registrada exitosamente', 1000);
        });
    }
  }

  const puTarea = async (idTarea, descripcion, estado) => {
    if (!descripcion.trim()) {
      document.getElementById('idPostTarea').focus();
      SwalAlert('info', 'No se pudo actualziar la tarea, ya que el campo esta vacío', 3000);
    } else {
      const data = {
        idTarea,
        descripcion,
        estado
      }
      const requestOptions = {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      };

      fetch(`${URL}/tarea`, requestOptions)
        .then(response => response.json())
        .then(() => {
          getTareas();
          SwalAlert('success', 'Tarea actualizada exitosamente', 1000);
          setEstadoFiltro(null);
        });
    }
  }

  const deleteTarea = async (id) => {
    fetch(`${URL}/tarea/${id}`, { method: 'DELETE' })
      .then(() => {
        getTareas();
        SwalAlert('success', 'Tarea eliminada exitosamente', 1000);
        setEstadoFiltro(null);
      })
  }

  const onChangeTarea = ({ target }) => {
    const { name, value } = target;
    setTarea({
      ...tarea,
      [name]: value
    })
  }

  const limpiarTarea = () => {
    setTarea({
      idTarea: '',
      idLista: '',
      descripcion: '',
      fechaCreacion: '',
      estado: false
    })
  }

  const handleClickOpen = () => setOpen(true);
  const handleClickOpenDelete = () => setOpenDelete(true);

  const handleClose = () => setOpen(false);
  const handleCloseDelete = () => setOpenDelete(false);


  const onUpdateTarea = (idTarea, descripcion, estado) => {
    setActualizarTarea({
      idTarea,
      descripcion,
      estado
    })
  }

  const onChangeUpdateTarea = ({ target }) => {
    const { name, value } = target;
    setActualizarTarea({
      ...actualizarTarea,
      [name]: value
    })
  }


  const filtroBinario = (type) => {
    fetch(`${URL}/tarea`)
      .then(response => response.json())
      .then(response => {
        let tareas = response.filter(tarea => tarea.estado === type);
        setTareas(tareas);
      })
  }


  return (
    <TareaContext.Provider
      value={{
        tareas,
        tarea,
        open,
        openDelete,
        actualizarTarea,
        setEstadoFiltro,
        filtroBinario,
        getTareas,
        postTarea,
        onChangeTarea,
        handleClickOpen,
        handleClickOpenDelete,
        handleClose,
        handleCloseDelete,
        onUpdateTarea,
        onChangeUpdateTarea,
        puTarea,
        deleteTarea,
        estadoFiltro
      }}>
      {children}
    </TareaContext.Provider>
  )
}

export default TareaProvider;
