const str: string = "Hello"
console.log(str)

let int: number = 21
console.log(int)

int = 78;
console.log(int)

const isFetching: boolean = true
const isLoading: boolean = false

const numberArray: number[] = [1,2,3,4,5,6]
const numberArray2: Array<number> = [1,2,3,4,5,6,7]

// numberArray.push("2") //выдаст ошибку при компиляции но всеравно соберет файл
console.log(numberArray)

const words: string[] = ['a', 'b', 'c']

//Tuple массив из разных типов данных

const contact: [string, number] = ['Poly', 123]
console.log(contact);

const box: [string, boolean, number] = ['12', true, 21]
box.push(null, 12, Infinity, undefined, )
console.log(box);

//Any
let variable: any = 24
variable = true

//====
function sayMyName(name: string):void {
  console.log(name)
}

sayMyName('Ivan')

//Never
// function throwError(message: string): never {
//   throw new Error(message)
//   let i: number = 1
// }

// throwError('Eror &&&!@ ?')

// function infinite(): never {
//   while(true) {}
// }

//Type
type ID = string | number

const id1: ID = 1234
const id2: ID = "1234"
const id3: ID = 1237

console.log(id1, id2, id3);


