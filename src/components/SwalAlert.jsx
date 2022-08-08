import Swal from 'sweetalert2'

const SwalAlert = (icon, title, timer) => (
  Swal.fire({
    position: 'top-end',
    icon,
    title,
    showConfirmButton: false,
    timer: timer
  })
)

export default SwalAlert;
