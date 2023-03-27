let name = prompt('Ваше имя').trim().length

let age = prompt('Ваш возраст')

if(+name % 2 === 0 && +age >= 18) {
    alert('Ну ладно пойдёт')
} else {
    alert('Не, не пойдёт')
}