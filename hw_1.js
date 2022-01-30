// Первое задание

var surname;
var firstName;
var patronic;
var age;

while (true) {
    surname = prompt ('Введите Вашу фамилию')
    if (surname == null || undefined) {
        alert('Введите фамилию корректно');
    } else break;
}

while (true) {
    firstName = prompt ('Введите Ваше имя')
    if (firstName == null || undefined) {
        alert('Введите имя корректно');
    } else break;
}

while (true) {
    patronic = prompt ('Введите Ваше отчество')
    if (patronic == null || undefined) {
        alert('Введите отчество корректно');
    } else break;
}

while (true) {
    age = +prompt ('Введите Ваш возраст')
    if (age < 18 || age > 100) {
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

// Второе задание

var arrayNumbers = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];

var sum = 0;

function treeSum(array) {

    for (i = 0; i < arrayNumbers.length; i++) {
        if (typeof i != 'number') {
            sum += treeSum(array);
        } else {
        sum += array[1];
        }
    }
    return sum;
    }
alert(treeSum(arrayNumbers));