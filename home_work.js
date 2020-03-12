//Условные операторы

//1. Если а – четное посчитать а*б, иначе а+б
var a = 6
var b = 3
if (a%2 == 0){
    console.log(a*b)
}else{
    console.log(a+b)
}

//2. Определить какой четверти принадлежит точка с координатами (х,у)
var x = -3
var y = 5
if (x >= 0 && y >= 0){
    console.log("I четверть")
}else if (x <= 0 && y >= 0){
    console.log("II четверть")
}else if (x <= 0 && y <= 0){
    console.log("III четверть")
}else if (x >= 0 && y <= 0){
    console.log("IV четверть")
}

//3. Найти суммы только положительных из трех чисел
var a = 3
var b = -2
var c = 8
if (a < 0 && b > 0 && c > 0){
    console.log(b+c)
}else if (a > 0 && b < 0 && c > 0){
    console.log(a+c)
}else if (a > 0 && b > 0 && c < 0){
    console.log(a+b)
}else if (a > 0 && b < 0 && c < 0){
    console.log(a)
}else if (a < 0 && b > 0 && c < 0){
    console.log(b)
}else if (a < 0 && b < 0 && c > 0){
    console.log(c)
}else if (a < 0 && b < 0 && c < 0){
    console.log("Нет положительных чисел")
}else {
    console.log(a+b+c)
} 

//4. Посчитать выражение макс(а*б*с, а+б+с)+3
var a = 6
var b = 4
var c = 9
var m = a*b*c
var p = a+b+c
if(a*b*c > a+b+c){
    console.log(m + 3)
}else{
    console.log(p + 3)
}

//5. Написать программу определения оценки студента по его рейтингу, на основе следующих правил
var a = 59
if (a >= 0 && a <= 19){
    console.log("F")
}else if (a >= 20 && a <= 39){
    console.log("E")
}else if (a >= 40 && a <= 59){
    console.log("D")
}else if (a >= 60 && a <= 74){
    console.log("C")
}else if (a >= 75 && a <= 89){
    console.log("B")
}else if (a >= 90 && a <= 100){
    console.log("A")
}

//Циклы

//1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99
var sum = 0
var count = 0
for (i = 1; i < 99; i++){
    if (i%2 == 0){
        sum += i
        count++
    }
}
console.log(`Количество четных чисел в диапазоне ${count}, а сумма четных чисел в диапазоне ${sum}`)

//2. Проверить простое ли число? 
var a = 179
var count = 0
for (i = 2; i < a; i++){
    if (a%2 == 0){
        count++
}
}
if(count == 0){
    console.log(`Число ${a} простое число`)
}else {                           
    console.log(`Число ${a} составное число`)
}

    
//3. Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

//4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;!
var n = 5
var result = 1
for (i = 1; i <= n; i++){
    result *= i
}
console.log(`Факториал числа ${n} равна ${result}`)

//5. Посчитать сумму цифр заданного числа
var a = "12011995"
var sum = 0
for (i = 0; i < a.length; i++){
    sum += Number(a[i])
}
console.log(`Сумма цифр ${a} равна ${sum}`)

//6. Вывести число, которое является зеркальным отображением последовательности цифр заданного числа
var a = "01234"
for (i = a.length-1; i > -1; --i){
    console.log(a[i])
}

//Одномерные массивы

//1. Найти минимальный элемент массива
//2. Найти максимальный элемент массива
//3. Найти индекс минимального элемента массива
//4. Найти индекс максимального элемента массива
var arr = [2, 5, 3, 8, 1, 10]
var min = arr[0]
var max = arr[0]
for (i = 0; i < arr.length; ++i) {
    if (arr[i] > max){
        max = arr[i]
    }else if (arr[i] < min) {
        min = arr[i]
    }
}
console.log(`Максимальный элемент ${max} с индексом ${arr.findIndex(maxElement => maxElement == max)}`)
console.log(`Минимальный элемент ${min} с индексом ${arr.findIndex(minElement => minElement == min)}`)

//5. Посчитать сумму элементов массива с нечетными индексами
var arr = [2, 5, 3, 8, 1, 10]
var count = 0
for (i = 0; i < arr.length; i++){
    if(i%2 != 0){
        count += arr[i]
    }
}
console.log(`Сумма элементов массива с нечетными индексами равна ${count}`)

//6. Сделать реверс массива (массив в обратном направлении)
var arr = [2, 5, 3, 8, 1, 10]
for (i = arr.length-1; i > -1; --i){
    console.log(arr[i])
}

//7. Посчитать количество нечетных элементов массива
var arr = [2, 5, 3, 8, 1, 10]
var count = 0
for (i = 0; i < arr.length; i++){
    if(arr[i]%2 != 0){
        count++
    }
}
console.log(`Количетсво нечетных элементов массива ${count}`)

//8. Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2
var arr = [6, 1, 8, 5]
var len = arr.length / 2
for (i = 0; i < len; i++){
    arr.push(arr[i])
}for (i = 0; i < len; i++){
    arr.shift(arr[i])
}
console.log(String(arr))

//9. Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))
var arr = [2, 5, 3, 8, 1, 10]
for (i = 0; i < arr.length; i++){
    for (j = i + 1; j < arr.length; j++){
        if (arr[i] > arr[j]){
            var a = arr[i]
            arr[i] = arr[j]
            arr[j] = a
        }
    }
}
console.log(String(arr))

