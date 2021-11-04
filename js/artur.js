////////////////////////////////////////////////////////////////////////////////////////////////////////
//0. Напишите функцию, toCa seкоторая принимает строку и
//возвращает ее в нижнем и верхнем регистре с ' - ' разделителем в качестве.
//Пример: toCase('Mthatha')должен вернуться 'mthatha-MTHATHA'.
console.log(" ");
console.log("*** task-1 ***");

const toCa = str => typeof str === 'string' 
  ? str.toLowerCase() + '-' + str.toUpperCase()
  : "value must be string"

console.log(toCa('Mthatha'))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//пин код может состоять с 4 или 6 целых цифр(никаких символов типа .,\/*-+?:%;№""!()),
//написать функцию которая будет валидировать введенный пин.
//функция должна вернуть true or false
console.log(" ");
console.log("*** task-2 ***");

const validatePIN = str => String(str).length !== 4 && String(str).length !== 6 
    ? false 
    : String(str).length !== String(Number(str).toFixed()).length 
      ? false 
      : Number(str) < 0 
        ? false 
        : true

console.log(validatePIN(612345))      
console.log(validatePIN("1234"))
console.log(validatePIN("1234"))
console.log(validatePIN("123456"))
console.log(validatePIN("1234&6"))
console.log(validatePIN("1"))
console.log(validatePIN("12"))
console.log(validatePIN("1234.0"))
console.log(validatePIN("12345"))
console.log(validatePIN("12-457"))
console.log(validatePIN("-1234"))
console.log(validatePIN("1.234"))
console.log(validatePIN("-2.234"))
console.log(validatePIN("00000000"))

///////////////////////////////////////////////////////////////////////////////////////
// Проверка URL на валидность. Передаем урл функции и проверяем 
//валидное оно или нет (возращаем тру или фолс). 
//Критерии: Урл должен начинаться с http:// иили 
//https:// и заканчиваться на .php или .html. 
//Например - http://site.ru/index.php - валидный,
// http://site.com - не валидный, 
//site.ru/index.php - не валидный
console.log(" ");
console.log("*** task-3 ***");

// const isValidate = str => {
//   if ((str.indexOf('https://') === 0 || str.indexOf('http://') === 0) && (str.slice(-'.php'.length) === '.php' || str.slice(-'.html'.length) === '.html')) {
//     return "валидный"
//   }

//   return "не валидный"
// }

const isValidate = str => typeof str !== 'string' 
  ? "значение должно быть строкой" 
  : ((str.indexOf('http://') === 0 || str.indexOf('https://') === 0) 
  && (str.slice(-'.php'.length) === '.php' || str.slice(-'.html'.length) === '.html')) 
    ? "валидный"
    : "не валидный"

console.log(isValidate('http://site.ru/index.php'))
console.log(isValidate('https://site.ru/index.html'))
console.log(isValidate('http://site.com'))
console.log(isValidate('site.ru/index.php'))
console.log(isValidate('site.http.ru/index.php'))
console.log(isValidate(1232))

////////////////////////////////////////////////////////////////////////////////////////
// Проверка номера телефона на валидность.
// Передаем телефон функции и проверяем валидное оно или нет
//(возращаем тру или фолс).
//Такие номера должны быть валидными: 89991112233,
//8 (999) 1112233, +7 (999) 111-22-33, +7 (999) 111 22 33.
// Т.е. телефон может начинаться как и с +7,
//так и с 8. код оператора, может быть в скобках и без,
// и с пробелами.
//Оставшиеся часть может быть с дефисами и пробелами
console.log(" ");
console.log("*** task-4 ***");

// function validatePhone(number) {
//   const param = [/\d{1}/, /\d{3}/, /\d{3}/, /\d{2}/, /\d{2}/]
//   return number.split(/ |\-/g).reduce((acc, val, indx) => {
//     if ((param[indx]).test(val) === false) {
//       return acc = (param[indx]).test(val)
//     } 
//       return acc 
//   }, true)
// }

// function validatePhone(number) {
//   const param = [/\d{1}/, /\d{3}/, /\d{3}/, /\d{2}/, /\d{2}/]
//   return number.split(/ |\-/g).every((el, i) => param[i].test(el))
// }

const validatePhone = str => 
  String(str)[0] !== "+" &&  String(str)[0] !== "8" && String(str)[0] !== "7" ? false
    : String(str).split('')
      .filter(el => el !== '(' && el !== ')' &&  el !== ' ' &&  el !== '+' && el !== '-')
      .join('').length === 11 

console.log(validatePhone('8 (999) 1112233')); /////8 (999) 1112233, +7 (999) 111-22-33, +7 (999) 111 22 33.
console.log(validatePhone('+7 (999) 111-22-33'));
console.log(validatePhone('+7 (999) 111 22 33'));
console.log(validatePhone('-7 (999) 111 22 33'));
console.log(validatePhone('-7999111 22 33'));
console.log(validatePhone('99991119223'));

/////////////////////////////////////////////////////////////////////////////////////////
// Реализуйте функцию union(), которая объединит уникальные
//элементы всех массивов, переданных ей. Пример использования:
//union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1])
//Результат выполнения: [1, 2, 3, 101, 10]

console.log(" ")
console.log("*** task-5 ***")

// const union = (...arg) => [...new Set([...arg].flat(Infinity))]
const union = (...arg) => [...arg].flat(1).filter((el, i, arr) => arr.indexOf(el) === i) 

console.log(union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1]));








