let a = 1;

let x = 0;

let ob = [];

let y = 3;

ob.push(x);
ob.push(a);

for (let i = 0; i < 10000000; i++)  {
    a = a + y;
    y = y + 2;
    ob.push(a);
}

alert ('Это база данных с квадратами чисел.');

for (let i = 0; i < 1; i++) {
   
    let aaa = +(prompt('Введите число: ', ''));
    if (typeof (aaa) == null || aaa == "" || isNaN (aaa)) {
        alert ("Вы ввели не число!");
        i = i - 1;
    } else {
        alert ('Квадрат числа ' + aaa + ' равен ' + ob [aaa] + '.');
        i = i - 1;
    }

}

