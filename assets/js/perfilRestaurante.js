document.addEventListener('DOMContentLoaded', () => {

    const nameElement = document.getElementById('name');
    const addresElement = document.getElementById('addres');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const editInfoLink = document.getElementById('edit-info');
    
    const closeAccountButton = document.getElementById('close-account');
    const deleteAccountButton = document.getElementById('delete-account');

    editInfoLink.addEventListener('click', (event) => {
        event.preventDefault();
        const newName = prompt('Enter your name:', nameElement.textContent);
        const newAddres = prompt('Enter your addres:', addresElement.textContent);
        const newEmail = prompt('Enter your email:', emailElement.textContent);
        const newPhone = prompt('Enter your phone number:', phoneElement.textContent);

        if (newName) nameElement.textContent = newName;
        if (newAddres) directionElement.textContent = newAddres;
        if (newEmail) emailElement.textContent = newEmail;
        if (newPhone) phoneElement.textContent = newPhone;
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
