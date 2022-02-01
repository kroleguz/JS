var surname;
var firstName;
var patronic;
var age;

while (true) {
    surname = prompt ('Введите Вашу фамилию')
    if (surname == null || surname == '' || surname == ' ' || !isNaN (surname)) {
        alert('Введите фамилию корректно');
    } else break;
}

while (true) {
    firstName = prompt ('Введите Ваше имя')
    if (firstName == null || firstName == '' || firstName == ' ' || !isNaN (age)) {
        alert('Введите имя корректно');
    } else break;
}

while (true) {
    patronic = prompt ('Введите Ваше отчество')
    if (patronic == null || patronic == '' || patronic == ' ' || !isNaN (patronic)) {
        alert('Введите отчество корректно');
    } else break;
}

while (true) {
    age = +prompt ('Введите Ваш возраст')
    if (age < 18 || age > 100 || isNaN (age)) {
        alert('Ваш возраст некорректный');
    } else break;
}

var isMale = confirm ('Ваш пол - мужской?');

alert('Ваше ФИО: ' + surname + ' '+ firstName + ' '+ patronic + '\n' +
    'Ваш возраст в годах: ' + age + '\n' +
    'Ваш возраст в днях: ' + (age * 365) + '\n' +
    'Через 5 лет Вам будет: ' + (age + 5) + '\n' +
    'Ваш пол: ' + (isMale ? 'мужской' : 'женский') + '\n' +
    'Вы на пенсии: ' + ((age >= 60) || !isMale && (age >= 55) ? 'да' : 'нет'));