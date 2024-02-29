import Swal from 'sweetalert2';

function showErrorMsg(errorMessage) {
    Swal.fire({
      title: 'Error!',
      text: errorMessage,
      icon: 'error',
      showConfirmButton: false,
	  timer: 1500,
    });
  }


export const showError=(error) => {
    // Handle the error here
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
        console.log(error);
      showErrorMsg( error.response.data.msg);
    } else if (error.request) {
      // The request was made but no response was received
      showErrorMsg('No response received from the server.');
    } else {
      // Something happened in setting up the request that triggered an Error
      showErrorMsg('An error occurred: ' + error.message);
    }
}
  
