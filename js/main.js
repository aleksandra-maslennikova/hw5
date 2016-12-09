//-----------task1-----------------------
/*
1. Переместите 0 в конец массива, остальные числа должны остаться неизменными*/
let myArr = [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ];
function moveZeroToTheEnd(arr) {
    let arrayOfZeros = [];
    let zero = 0;
    for (let i = 0; i < arr.length;){
        if (arr[i] === 0){
        arr.splice(i, 1);
        arrayOfZeros.push(zero); 
        continue
        }
        else { 
            i++;
        }
    }
    return arr.concat(arrayOfZeros);
}
console.log(moveZeroToTheEnd(myArr));

//-----------task2-----------------------
/*
2. Верните сумму двух найменьших чисел в массиве*/
let arr1 = [0,200,10,25,15];
function sumOfLeastNumbers(arr){
    function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    }
    let arrSorted = arr1.sort(compareNumeric);
    let sum = arrSorted[0] + arrSorted[1];
    return sum;
}

console.log(sumOfLeastNumbers(arr1))

//-----------task3-----------------------

/*3. Напишите функцию которая меняет местами имя и фамилию*/

function nameShuffler(name){
    let arrFromNameSername = name.split (' ');
    arrFromNameSername.reverse();
    return arrFromNameSername.join(' ');
}

console.log(nameShuffler('john McClane'));// "McClane john"

//------------task4-------------------------

/*
4. Напишите функцию которая принимает массив с именами и возвращает массив
   в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
*/
let arrNames = ['KARLY', 'DANIEL', 'KELSEY'];
function capMe(arr){
    for (let i = 0; i < arr.length; i++){
        let name = arr[i];
        arr[i] = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
    }
    return arr;
}

console.log(capMe(arrNames));

//-----------------------------------
//@SUPER


/* 1. Найдите число отсутствующее в заданной последовательности*/
  

 let arr2 = [1,3,5,9];
 function findSkippedNumber(arr){
    let skippedNumber;
    if (arr[0] != 1) {
        return skippedNumber = 1;
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] + 2 != arr[i+1]) {
            skippedNumber = arr[i]+2;
            break;
        }
    }
    return skippedNumber;
}

console.log(findSkippedNumber(arr2));

//----------------------------------

let arr3 = [0,8,16,32];

function findSkippedNumber1(arr){
    let skippedNumber1;
    if (arr[0] != 0){
        return skippedNumber1 = 0;
    } 
     for(let i = 0; i < arr.length; i++){
        if(arr[i+1] - 8 != arr[i]) {
            skippedNumber1 = arr[i] + 8;
            break;
        }
    }
    return skippedNumber1;
}
console.log(findSkippedNumber1(arr3));

