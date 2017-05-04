


let reportcard = require('./reportcard');
let items = require('./items');
let animals = require('./animals');


 /* Problem #1: Write a function that returns the subjects from a student's report card. Use the REPORTCARD
  dataset as an input.*/
 
  function subject(reportlist){
      let sublist=[];
      for(let i=0;i<reportlist.length; i++)
      {
         sublist.push({subject:reportlist[i].subject});
      } 
      return sublist; 
}
 function sub_subject(reportlist){
     function s_func(reportitem){
         return reportitem.subject;
     }
     return reportlist.map(s_func);
 }
console.log(subject(reportcard));
console.log(sub_subject(reportcard));




/* Problem #2
* Write a function that apply sales tax 10 % to the price of all item in the array. The function should return array of item.
*/
function item_imperative(items){
    let saleTax=[];
    for(let i=0;i<items.length;i++){
        let taxval=items[i].price * 1.1 // for tax 10%
        let total= items[i].price+taxval;
         saleTax.push({
             name:items[i].name,
             price: total,
         });
    }
    return saleTax;

}
function item_functional(items){
    function tax(item){

    return{ name:item.name,
            price:item.price + (item.price*  1.1 )//for tax 10%
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
let arrlist=[5,9, 'hello'];
function arr_imperative(items) {
    let new_junk = [];
    for (let i = 0; i < items.length; i++) {
         new_junk.push(0);
    }
 
    return new_junk;
 }
function arr_functional(zeros){
    function  arrZero(zero){
        return 0;
    }
   return zeros.map(arrZero);
}
console.log(arr_imperative(arrlist));
console.log(arr_functional(arrlist));

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
function arr_imperative(array){
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
function compare(word){
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

function compare_func(word){
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
console.log(compare('U.S.A, is a country!')); 
console.log(compare_func('U.S.A, is a country!'));

 /* Problem #7

 * Write a function that accepts an array of farm animals and returns the distance of each animal from the barn
 * (specified as a number). Use the ANIMALS array as an input for this problem, and assume the barn is at (0, 0).
 */
    function distance(animals){
        let dist=[];
       
        let x=0;
        let y=0;
        
        for(let i=0;i<animals.length; i++){
            let x1=animals[i].x;
            let y1=animals[i].y;
           let total_dist=Math.sqrt((x1-x )*(x1-x)+ (y1-y)*(y1-y));
           dist.push({nameofamimal:animals[i].species, distance:total_dist});

        }
        return dist;
    } 
    function animal_dist(animals){
            function animal_func(animal){
               let x=0;
               let y=0;
               let x1=animal.x;
               let y1=animal.y;
           let total_dist=Math.sqrt((x1-x )*(x1-x)+ (y1-y)*(y1-y));  
            return ({nameofamimal:animal.species, distance:total_dist});
        }
        return animals.map(animal_func);
    }
 console.log(animal_dist(animals));
 console.log(distance(animals));
     
     


