// creamos una instancia de la clase GitHub
const github = new GitHub;
// instancia para la ui
const ui = new UI;
// creamos una variablepara el input
const searchUser = document.getElementById('searchUser');

// añadimos un evento al input 
searchUser.addEventListener('keyup', (e) => {
  // variable para obetener el texto del input
  const textUser = e.target.value;

  if(textUser !== '') {
    // hacemos una llamada http
    github.getUser(textUser)
    .then((data) => {
      if(data.profile.message === 'Not Found') {
        // mostramos un mensaje de alerta
        ui.showAlert('User not found', 'alert alert-danger');
      }
      else {
        // mostramos el perfil
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  }
  else {
    // limpiamos el perfil
    ui.clearProfile();
  }
});