
do{
    var name = prompt("Введите свое имя")
}while (!name || !isNaN(name)) {}
do{
    var yearBirth = +prompt("Введите свой год рождения")
}while (isNaN(yearBirth) || yearBirth < 1900) {}
do{
    var year = +prompt("Введите нынешний год")
}while (isNaN(year) || year < 2023) {}

alert('Откройте консоль, чтобы увидеть результат')


function user(a, d, c = ' лет.') {
    let str = a - d + c
    return str
}

let func = user(year,yearBirth)
console.log(' Здравствуйте ' + name + ' ! ' + ' Ваш возраст ' + func);


