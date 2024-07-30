document.addEventListener('DOMContentLoaded', () => {

    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const editInfoLink = document.getElementById('edit-info');

    const notificationsCheckbox = document.getElementById('notifications');
    const closeAccountButton = document.getElementById('close-account');
    const deleteAccountButton = document.getElementById('delete-account');



    //Editar informacion
    editInfoLink.addEventListener('click', (event) => {
        event.preventDefault();
        const newName = prompt('Enter your name:', nameElement.textContent);
        const newEmail = prompt('Enter your email:', emailElement.textContent);
        const newPhone = prompt('Enter your phone number:', phoneElement.textContent);

        if (newName) nameElement.textContent = newName;
        if (newEmail) emailElement.textContent = newEmail;
        if (newPhone) phoneElement.textContent = newPhone;
    });

    //Notificaciones
    notificationsCheckbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            alert('Notifications enabled');
        } else {
            alert('Notifications disabled');
        }
    });

    //Cerrar cuenta
    closeAccountButton.addEventListener('click', () => {
        const confirmation = confirm('Are you sure you want to close your account?');
        if (confirmation) {
            alert('Account closed');
        }    });

    //Eliminar cuenta
    deleteAccountButton.addEventListener('click', () => {
        const confirmation = confirm('Are you sure you want to delete your account?');
        if (confirmation) {
            alert('Account deleted');
        }
    });

});
