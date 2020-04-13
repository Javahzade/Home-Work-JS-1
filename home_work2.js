//Функции

//1. Получить строковое название дня недели по номеру дня.
function dateFoo (date) {
  var days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
  return days[date.getDay()]
}
var date = new Date("April 10, 2020 ")
console.log(dateFoo(date))

//2. Вводим число (0-999), получаем строку с прописью числа.
var number = strFoo(621)
console.log(number)

function strFoo(num){
    var a = num%10 
    var b = (num-a)/10 
    var c = num%100 
    var d = (num-c)/100 
    var j = (num-a)%100 
    var k = c/10
    var z = j/10 

  N1 = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять']
  
  N2 = ['одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать']
  
  N3 = ['десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
  
  N4 = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот']

  if (num < 100){
    if (num < 10){
      return N1[a-1]
    }else if (num > 10 && num < 20){
      return N2[a-1]
    }else if (a == 0){
      return N3[b-1]
    }else{
      return N3[b-1]+' '+N1[a-1]
    }
  }else if (num > 99 && num < 1000){
    if (c == 0){
      return N4[d-1]
    }else if (c > 10 && c < 20){
      return N4[d-1]+' '+N2[a-1]
    }else if (c < 10){
      return N4[d-1]+' '+N1[c-1]
    }else if (a == 0){
      return N4[d-1]+' '+N3[k-1]
    }else {
      return N4[d-1]+' '+N3[z-1]+' '+N1[a-1]
    }
  }
}

//3. Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число.
var str = getStringNumber('шестьсот сорок два')

function getStringNumber (string) {
  if (string === 'Pick a number in range from 0 to 999') {
      console.log('Pick a number in range from 0 to 999')
      return
  }

  N1 = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'] 
  N2 = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать']
  N3 = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
  N4 = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот']
  num1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] 
  num2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  num3 = [0, 0, 20, 30, 40, 50, 60, 70, 80, 90]
  num4 = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900]
  resultNum = ''
  strLow = makeArrayFromString(string.toString().toLowerCase().trim())

  function makeArrayFromString (string) {
      let temp = ""
      let result = []
  
      for (let i = 0; i < string.length; i++) {
          if (string[i] !== ' '){
              temp += string[i]
          } else if (temp !== '') {
              result.push(temp)
              temp = ''
          }
  
          if(i === string.length - 1 && temp !== ''){
              result.push(temp)
              temp = ''
          }
      }
  
      return result
  }

  if (strLow.length === 1) {
      if (N1.includes(strLow[0])) {

          resultNum = num1[N1.indexOf(strLow[0])]

      } else if (N2.includes(strLow[0])) {

          resultNum = num2[N2.indexOf(strLow[0])]

      } else if (N3.includes(strLow[0])) {

          resultNum = num3[N3.indexOf(strLow[0])]

      } else if (N4.includes(strLow[0])) {

          resultNum = num4[N4.indexOf(strLow[0])]

      }
  } else if (strLow.length === 2) {
      if (N3.includes(strLow[0]) && N1.includes(strLow[1])){

          resultNum = num3[N3.indexOf(strLow[0])]
          +
          num1[N1.indexOf(strLow[1])]

      } else if (N4.includes(strLow[0])){
          if (N1.includes(strLow[1])) {

              resultNum = num4[N4.indexOf(strLow[0])]
              +
              num1[N1.indexOf(strLow[1])]

          } else if (N2.includes(strLow[1])) {

              resultNum = num4[N4.indexOf(strLow[0])]
              +
              num2[N2.indexOf(strLow[1])]

          } else if (N3.includes(strLow[1])) {

              resultNum = num4[N4.indexOf(strLow[0])]
              +
              num3[N3.indexOf(strLow[1])]

          }
      }
  } else if (strLow.length === 3) {
      if (N4.includes(strLow[0])) {
          if (N3.includes(strLow[1])) {
              if (N1.includes(strLow[2])) {

                resultNum = num4[N4.indexOf(strLow[0])]+num3[N3.indexOf(strLow[1])]+num1[N1.indexOf(strLow[2])]
              }
          }
      }
  }

  console.log(`${resultNum}`)
}

//4. Найти расстояние между двумя точками в двумерном декартовом пространстве.

class Dots {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  disance(d1, d2) {
    return Math.sqrt(((d2.x - d1.x) ** 2) + ((d2.y - d1.y) ** 2));
  }
}
const dot = new Dots();
console.log(dot.disance(new Dots(8, -4), new Dots(12, 18)));