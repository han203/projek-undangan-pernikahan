document.addEventListener('DOMContentLoaded', function() {
    const dateElement= document.getElementById('date');
    const timeElement= document.getElementById('time');

    // Set the wedding details
    dateElement.textContent='Desember 10, 2034';
    timeElement.textContent='6:00 PM';

    //Handle Guest form submission
    const guestForm = document.querySelector('.Guest form');
    guestForm.addEventListener('submit', function(event){
        event.preventDefault();

        const name= document.getElementById('name').values;
        const email= document.getElementById('email').values;

        alert('Thank you, $(name)! Your Guest has been received.');
        guestForm.reset();
    });
});