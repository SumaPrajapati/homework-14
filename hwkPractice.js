

/* Problem #2
* Write a function that apply sales tax 10 % to the price of all item in the array. The function should return array of item.
*/
let reportcard = require('./reportcard');
let items = require('./items');
let animals = require('./animals');


function item_imperative(items){
    let saleTax=[];
    for(let i=0;i<items.length;i++){
        let val=items[i].price * 1.2 // for tax 20%
         
         saleTax.push({
             name:items[i].name,
             price: val,
         });
    }
    return saleTax;

}
function item_functional(items){
    function tax(item){
    return{ name:item.name,
            price: item.price *  1.2 //for tax 20%
       };
    }

    return items;
}
console.log(item_imperative(items));                                        
console.log(item_functional(items));
console.log(items);
/////
/* 
*Problem #3  Write the function that return an array of the same size as an input array but filled with zeros. for 
* example, the array [5,9,'hello'] would return [0,0,0]
*/
let array=[5,9, 'hello']
function arr_imperative(zeros){
    let arr=[];
    for(let i=0;i<zeros.length;i++){
        arr.push(0);
    }
   return arr;
}
function arr_functional(zeros){
    function  arrZero(zero){
        return 0;
    }
   return zeros.map(arrZero);
}
console.log(arr_imperative(array));
console.log(arr_functional(array));

/* 
* Problem # 4   Write a function that return the abbreviation for provides phrase. The phraes should be consist of a capitalized version in the first
* of the each word.
*/
let words='these words are enter'; // TWAE
function abb_imperative(message){
     let sentence=message.split(' ');
      let letter=[];
     for(let i=0;i<sentence.length;i++){
         console.log(message);

        let str= sentence[i][0].toUpperCase();
          letter.push(str);

     }
return letter.join('');
}

function abb_functional(message){
    function abb_Word(messages){

        return messages[0].toUpperCase();
    }
    let word=message.split(' ');
    return word.map(abb_Word).join('');
}
console.log(abb_imperative(words));
console.log(abb_functional(words));


 /* Problem #6 Write a function that accepts an array of numbers and returns an array of boolean values reflecting whether
 * each number is negative (true if yes, false if no).
 */
// step 1: get number have positive and negative.
//step 2: check the each no its have negative so that no would be true 
//step 3: check positive no would be false
let arr=[5, 4,-7, -2, 0, -4, 8]
function arr_imperative(arrray){
    let number=[];
   for(let i=0;i<array.length;i++){
       if(array[i]<0){
           number.push(true);
       }else{
            number.push(false);
       }
   }
 return number;
}

function arr_functional(array){
    function nums(num){
        if(num<0){
            return true;
        }else{
            return false;
        }
        return array.map(nums);
    }

}
console.log(arr_imperative(arr));
console.log(arr_functional(arr));


/* 
* Problem # 5  Write the function that remove punctuation from the provided sentence(exclamation mark, periods, commas)
*/
//let sentence=[];
function p_imperative(word){
 let words=word.split('');
 let str =[];
 for(let i=0; i<words.length;i++){
  if(words[i]!=='!'&& words[i]!==',' && words[i]!=='.'){
      str.push(words[i]);
      console.log('helloword');
  }
 }
  return str.join('');
}

function p_functional(word){
    function punch(strr){
        if(strr !=='!' && strr !=='.' && strr !== ','){

           return strr;;                                        
        }else{
            return '';
        }
    }
        return word.split('').map(punch).join('');
    }

//}
console.log(p_imperative('U.S.A, is biggest country!')); 
console.log(p_functional('U.S.A, is biggest country!'));


