const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
    play();
    }
})

button.addEventListener("click", play);

function play() {

    const userNumber = document.querySelector("#guess").value;

    if (userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Oй!',
            text: 'Введите число от 1 до 20!',
          })
    }

    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Oй!',
            text: 'Нужно ввести число!',
          })
    }
    
    else {
        if(userNumber < answer) {
            Swal.fire("Попробуй число повыше!",
            "Компьютер пока побеждает!")
        }

        else if (userNumber > answer) {
            Swal.fire("Попробуй число пониже!",
            "Компьютер пока побеждает!")
        }

        else {
            Swal.fire({
                title: 'ПОБЕДА!!!',
                imageUrl: 'https://images.unsplash.com/photo-1516967124798-10656f7dca28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG92ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: 'ПОБЕДА',
            })
        }
    }
}