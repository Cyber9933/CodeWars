
console.clear();

console.log('------Valid Phone Number-----');
 
const phonenumber='(123) 456-7890'
function validPhoneNumber(phoneNumber){
    if (validPhoneNumber===phonenumber){
        return true;
    }else{
        return false;
    }
}
console.log(validPhoneNumber("(123) 456-7890"));
console.log(validPhoneNumber("(1111)555 2345"));

function validPhoneNumber(phoneNumber) {
    
    if (phoneNumber[0] !== '(') 
        return false;
    
    if (phoneNumber[4] !== ')') 
        return false;
    
    if (phoneNumber[5] !== ' ') 
        return false;
    
    if (phoneNumber[9] !== '-') 
        return false;
    
    if (phoneNumber.length !== 14) 
        return false;
    
    return true;
}

console.log(validPhoneNumber("(123) 456-7890")); // true
console.log(validPhoneNumber("(1111)555 2345")); // false
console.log(validPhoneNumber("(098) 123 4567")); // false (nes nėra brūkšnelio)

/*function validPhoneNumber(n){
    return n == '(123) 456-7890'
}
    */

console.log('*********su litrais**********');

/*

0.5litro per valanda,reikia grazinti kiek litru sugere
time=3---->litres=1
time=6.7---->litres=3
time=11.8---->litres=5
*/
function litres(time){
        return Math.floor(time*0.5);

}

console.log(Math.floor(6.7));
console.log(Math.floor(3));
console.log(Math.floor(5));

function litres(time) {
  return Math.floor(time/2);
}

function litres(time) {
  return parseInt(time/2);
}

console.log('*********magNumber**********');

//eina karys per gatve ir sauna 3 kartus. kareivis turi viena is ginklu
// apskaiciuoti kiek pasiimti detuviu

function magNumber(info){
        // apsiskaiciuojam kulkas
        let mag=0;
        if(info[0]==='PT92'){
                mag=Math.ceil((3*info[1])/17); 
        }       //apsiskaiciuojame kulkas
        if(info[0]==='M4A1'||info[0]==='M16A2'){
                mag=Math.ceil((3*info[1])/30); 
        }  
        return mag
}
console.log(magNumber);


console.log('*********kuno mases indeksas**********');

function bmi(weight, height) {
        
        let bmiValue = weight / (height ** 2);
        let result = '';
        
        
        if (bmiValue <= 18.5) {
          result = 'Underweight';
        } else if (bmiValue <= 25) {
          result = 'Normal';
        } else if (bmiValue <= 30) {
          result = 'Overweight';
        } else {
          result = 'Obese';
        }
        
        return result;
      }
console.log(bmi(50,1.80));
console.log(bmi(80,1.80));
console.log(bmi(90,1.60));
console.log(bmi(80,1.70));

//kiti pvz
/*
const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";

*/
//idomus pvz

/*
function bmi(weight, height) {
  const $ = weight / height**2;
  return $ <= 18.5 ? 'Underweight' : $ <= 25.0 ? 'Normal' : $ <= 30.0 ? 'Overweight' : 'Obese';
}
  */


console.log('*********Drink About**********');

function peopleWithAgeDrink(old){
        if(old<14)
        {
                return 'drink today';
        }else if(old<18){
                return'drink coke';
        }else if (old<21){
                return'drink bear';
        }else (old>22) 
                return 'drink wiskey';
        
       
}
console.log(peopleWithAgeDrink(18));


console.log('*****************');
function isPangram(string){
        let word='A-Z';
        if (word<0)
        {return true}
        else (word>0)
                return false
   }
      console.log(isPangram("The quick brown fox jumps over the lazy dog."));
      console.log(isPangram("This is not a pangram."))
      
      
      //

      function isPangram(string) {
        const lowerCaseString = string.toLowerCase();
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                         'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        
      
        for (let i = 0; i < alphabet.length; i++) {
          if (lowerCaseString.indexOf(alphabet[i]) === -1) {
            return false;
          }
        }
        
        return true;
      }
      
      console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
      console.log(isPangram("This is not a pangram.")); // false


console.log('-----------Switch it Up!--------');


      function switchItUp(number){
        if (number===0){
          return 'Zero';
        }else if (number===1){
          return 'One';
        }else if (number===2){
          return 'Two';
        }else if (number===3){
          return 'Three';
        }else if (number===4){
          return 'Four';
        }else if (number===5){
          return 'Five';
        }else if (number===6){
          return 'Six';
        }else if (number===7){
          return 'Seven';
        }else if (number===8){
          return 'Eitgh';
        }else if (number===9){
          return 'Nine';
      
      }
    }
    console.log(switchItUp(1));


    // kiti trumpesni variantai:

  /*
  switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
  */

  function switchItUp(number){
    let words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    return words[number];
  }
  console.log((switchItUp(3)));


  function getPlanetName(id){
    let name=['','Mercury', 'Venus','Earth', 'Mars','Jupiter','Saturn','Uranus','Neptune'];
    
    return name[id];
  }
  console.log(getPlanetName(3));


  // kiti pvz

  /*
  function getPlanetName(id){
  return {
    1: 'Mercury',
    2: 'Venus',
    3: 'Earth',
    4: 'Mars',
    5: 'Jupiter',
    6: 'Saturn',
    7: 'Uranus',
    8: 'Neptune'
  }[id]
}
  */
console.log('-------Is it even?----------');

function testEven(n) {
  let numb=0;
    if(n===numb){
      return true;
      }else{
        return false;
      }
}
console.log(testEven(7));
console.log(testEven(0));

function isEven(n) {
  // Check if the number has a decimal part
  if (n % 1 !== 0) {
    return false; // Floats with non-zero decimal parts are considered uneven
  }
  
  // Check if the integer part is even
  return n % 2 === 0;
}

function testEven(n) {
  return n%2===0;
}


function testEven(n) {
  return n % 2 === 0 ? true : false;
}


console.log(testEven(0), true, "testEven for 0");
console.log(testEven(0.5), false, "testEven for 0.5");
console.log(testEven(1), false, "testEven for 1");
console.log(testEven(2), true, "testEven for 2");
console.log(testEven(-4), true, "testEven for 2");



console.log('-------Will you make it?----------');

function zeroFuel(distanceToPump, mpg, fuelLeft) {
  const maxDistance = mpg * fuelLeft;
  
  return maxDistance >= distanceToPump;
}
console.log(zeroFuel(2))



const zeroFuel1 = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump/mpg <= fuelLeft
};


const zeroFuel2 = (distanceToPump, mpg, fuelLeft) => {
  return (mpg * fuelLeft) >= distanceToPump;
};

console.log(zeroFuel(50,25,2), true);
console.log(zeroFuel(100,50,1), false);
console.log('-------All Star Code Challenge #18----------');



function strCount(str) {
  // Sukuriame objektą raidžių skaičiavimui
  let counts = {};
  
  // Pereiname per kiekvieną raidę
  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase(); // Konvertuojame į mažąsias raides
    
    // Jei raidė jau yra mūsų skaičiuoklėje, padidiname jos skaičių
    if (counts[letter]) {
      counts[letter]++;
    } else {
      // Jei dar ne, pridedame ją ir nustatome skaičių 1
      counts[letter] = 1;
    }
  }
  
  return counts;
}

console.log(strCount('e'));

function strCount(str){
  let count={};
  for (let i=0; i<str.length; i++){
    let letter=str[i].toLowerCase();
    if(count[letter]){
      count[letter]++;
      
    }else{
      count[letter]=1;
    }
  }
  return count;
}
//

function strCount(str,letter) {
  return str.split(letter).length - 1;
  
}

//
function strCount(str, letter){  
  return str.split('').filter(c => c == letter).length;
}
//

const strCount1 = (str, letter) =>  
  --str.split(letter).length;
//
function strCount(str, l){ 
  const a = str.split('').map(x => x.replace(l,'')).join('');
   return str.length- a.length;
 }


 //
 function strCount(str, letter) {
  
  const indices = []; //jei pusshini i masyva, privalo buti constanta
  for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
          indices.push(i); //pridedame i masyva
      }
  }
  return indices.length;
}


    console.log(strCount('Hello', 'o'), 1);
    console.log(strCount('Hello', 'l'), 2);
    console.log(strCount('',      'z'), 0);
    console.log(strCount('vasara','a'), 3);


console.log("-------You Can't Code Under Pressure #1----------");

function doubleInteger(i) {

  return i*2;
}

//pvz
const doubleInteger1 = i => 2 * i;

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i+i;
}

const doubleInteger2 = i => i*2




console.log("-------Area or Perimeter----------");


const areaOrPerimeter= function(l , w) {
  if (l===w){
    return l*w;
  }else{
    return 2*(l+w);
  }
};


//pvz
const areaOrPerimeter1 = function(l , w) {
  return l == w ? l*w : 2*(l + w)
};


console.log("-------Century From Year----------");

function century(year) {
  return Math.ceil(year / 100);
 };
   
console.log(century(1956));


//pvz

function century(year) {
  return (year + 99) / 100 | 0;
}


function century(year) {
  if (year <= 100){
    return 1;
  }

  let cen = parseInt(year / 100);
  let rem = year % 100;
  
  return rem === 0 ? cen : cen + 1;
}


function century(year) {
  return Math.floor((year-1)/100)+1;
}


console.log("-------Add Length----------");
let str=''
function addLength(str) {
  return str+str.length
  }
  

  console.log(addLength('apple ban'));
  
  
  function addLength(str) {
    // Skaidome eilutę į žodžius
    const words = str.split(' ');
    
    // Sukuriame tuščią masyvą rezultatams
    const result = [];
    
    // Einame per kiekvieną žodį
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      // Sukuriame naują eilutę su žodžiu ir jo ilgiu
      const wordWithLength = word + ' ' + word.length;
      // Pridedame į rezultatų masyvą
      result.push(wordWithLength);
    }
    
    return result;
  }


  // pvz

  function addLength(str) {
    return str.split(' ').map(word => word + ' ' + word.length)
  }


  console.log("-------Add Length----------");

  function greet()
{ 
  return "hello world!";
}

//pvz

const greet1 = () => "hello world!";

console.log("-------Simple multiplication----------");

function simpleMultiplication(number) {
  
  if (number %2===0){
      return number *8;
      }else {
        
    return number *9;
}
};
console.log(simpleMultiplication(8));


//pvz
function simpleMultiplication1(n) {
  return n * (n % 2 ? 9 : 8);
}

const simpleMultiplication2 = number =>
  (8 + number % 2) * number;

console.log("-------Grasshopper - Basic Function Fixer----------");



function addFive(num) {
 
   return num+5;
 };

 console.log(addFive(10));
 

 //pvz

 const addFive1 = n => n + 5;

 function addFive2(num) {
  let total = num + 5;
  return total;
}


const addFive3 = (num) => num + 5

console.log("-------Polishish NEPATEIKTA----------");


function correctPolishLetters(string) {
  const polishLetters = {
    'ą': 'a',
    'ć': 'c',
    'ę': 'e',
    'ł': 'l',
    'ń': 'n',
    'ó': 'o',
    'ś': 's',
    'ź': 'z',
    'ż': 'z'
  };
  
  let result = '';
  
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (polishLetters.hasOwnProperty(char)) {
      result += polishLetters[char];
    } else {
      result += char;
    }
  }
  
  return result;
}
console.log(correctPolishLetters("Jędrzej Błądziński"));


console.log("-------Is he gonna survive?----------");
function hero(bullets, dragons){
  return bullets >= dragons * 2
}

console.log(hero(5));


//pvz
function hero(bullets, dragons){
  //Get Coding!
  return (bullets / 2 >= dragons) ? true : false;
  }

  hero = (bullets, dragons) =>{
    if (bullets/2 >= dragons) {
      return true;
    }
    else {
      return false;
    }
    }


    console.log("-------Difference of Volumes of Cuboids----------");
    function findDifference(a, b) {
      
      const volumeA = a[0]*a[1]*a[2];
      
      
      const volumeB = b[0] * b[1] * b[2];
      
     
      return Math.abs(volumeA-volumeB) ;
    }
    console.log( findDifference([2, 2, 3], [5, 4, 1]));
  

    // pvz

    findDifference = (a, b) => Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);

    console.log("--------Get Planet Name By ID-------");

    function getPlanetName(id){
      let name='';
      switch(id){
        case 1:
          name = 'Mercury'
          break;
        case 2:
          name = 'Venus'
          break;
        case 3:
          name = 'Earth'
          break;
        case 4:
          name = 'Mars'
          break;
        case 5:
          name = 'Jupiter'
          break;
        case 6:
          name = 'Saturn'
          break;
        case 7:
          name = 'Uranus'
          break;
        case 8:
          name = 'Neptune'
          break;
          default:
           
      }
       return name;
      
    }

    function getPlanetName(id){   //su objektais
      return {
        1: 'Mercury',
        2: 'Venus',
        3: 'Earth',
        4: 'Mars',
        5: 'Jupiter',
        6: 'Saturn',
        7: 'Uranus',
        8: 'Neptune'
      }[id]
    }

    const getPlanetName1 = id => ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'][id-1]



    console.log(getPlanetName(2), 'Venus');
    console.log(getPlanetName(5), 'Jupiter');
    console.log(getPlanetName(3), 'Earth');
    console.log(getPlanetName1(3), 'Earth');



    console.log("--------You only need one - Beginner-------");



    /*You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

a can contain numbers or strings. x can be either.

Return true if the array contains the value, false if not.*/

    function check(a,x){
      return a.includes(x);
    }
    //
    const check1 = (a,x) => a.includes(x);
    //
    function check(a,x){
      return a.indexOf(x) > -1 ? true : false;
    };
    //
    function check(a,x){
      return a.indexOf(x) > -1;
    };
    //
    const check2 = (a, x) => a.some(item => item === x);
    //
    function check(a,x){
      let result = false;
      for(i = 0; i < a.length; i++){
        if(a[i]==x){
        result  = true;
        }
       
      }
      return result;
    };

    console.log(check([66, 101], 66), true);
    console.log(check([101, 45, 75, 105, 99, 107], 107), true);
    console.log(check(['t', 'e', 's', 't'], 'e'), true);
    console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);
    console.log(check2(['what', 'a', 'great', 'kata'], 'kat'), false);


    console.log("--------Sum of positive-------");

    /*Task
You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] => 1+7+12=20
*/


function positiveSum(arr) {
  return arr
        .filter(n=>n>=0)
        .reduce((total,n)=>total+n,0)
  
}

//

function positiveSum(arr) {
  let total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}


//
function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);     // a-total, b- kiti like skaiciai, panaudotas ternary
}

//

function positiveSum(arr) {
  let sum = 0;
  
  for (n of arr) {
    if (n > 0) sum += n;
  }
  
  return sum;
}

    console.log(positiveSum([1,2,3,4,5]),15);
    console.log(positiveSum([1,-2,3,4,5]),13);
    console.log(positiveSum([]),0);
    console.log(positiveSum([-1,-2,-3,-4,-5]),0);
    console.log(positiveSum([-1,2,3,4,-5]),9);


    console.log("--------SpeedCode #2 - Array Madness-------");
//https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1

  /*Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3  */


function arrayMadness(a,b){
  let sum1=0;
  for(const n of a){
    sum1 +=n**2;
  }
  let sum2=0;
  for(const n of b) {
    sum2+=n**3;
  }
  return sum1>sum2
}

//

const arrayMadness1 = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0)


//

const pow = (arr, exp) => arr.reduce((res,el) => res += el ** exp, 0);
const arrayMadness3 = (a, b) => pow(a, 2) > pow(b, 3);


//

const arrayMadness2 = (A, b) => A.map(e => e**2).reduce((e,c) => e + c) > b.map(e => e**3).reduce((e,c) => e + c)

   console.log(arrayMadness([4,5,6],[1,2,3]), true);
   console.log(arrayMadness([5,6,7],[4,5,6]), false);
   console.log(arrayMadness([4,5,6],[3,4,5]), false);
   console.log(arrayMadness([3,4,5],[2,3,4]), false);
   console.log(arrayMadness([2,3,4],[1,2,3]), false);
   console.log(arrayMadness([1,2,3],[0,1,2]), true);
   console.log(arrayMadness([5,3,2,4,1],[15]), false);
   console.log(arrayMadness([2,5,3,4,1],[3,3,3,3,3]), false);
   console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]), false);
   console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), true);
   console.log(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), false);
   console.log(arrayMadness3([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), false);


   console.log("--------Polish alphabet-------");

   /*
ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski" */

function correctPolishLetters (string) {
      return string
        .replaceAll('ą', 'a')
        .replaceAll('ć', 'c')
        .replaceAll('ę', 'e')
        .replaceAll('ł', 'l')
        .replaceAll('ń', 'n')
        .replaceAll('ó', 'o')
        .replaceAll('ś', 's')
        .replaceAll('ź', 'z')
        .replaceAll('ż', 'z')
        
    }

    //

    function correctPolishLetters(s) {
      return s.replace(/[ąćęłńóśźż]/g, c => "acelnoszz"["ąćęłńóśźż".indexOf(c)])
    }

    //
    let polishLetters = {
      "ą": "a",
      "ć": "c",
      "ę": "e",
      "ł": "l",
      "ń": "n",
      "ó": "o",
      "ś": "s",
      "ź": "z",
      "ż": "z",
  };
  
  /*function correctPolishLetters (string) {
    return string.split('').map((c) => polishLetters[c] || c).join("");
  }*/

    console.log(correctPolishLetters("Jędrzej Błądziński"), "Jedrzej Bladzinski");
    console.log(correctPolishLetters("Lech Wałęsa"), "Lech Walesa");
    console.log(correctPolishLetters("Maria Skłodowska-Curie"), "Maria Sklodowska-Curie");



    console.log("--------Find the Difference in Age between Oldest and Youngest Family Members-------");

    function differenceInAges(ages){
      const min=Math.min(...ages);
      const max=Math.max(...ages);
      const diff=max-min;

      return [min, max, diff];
    }
    
// maziau efektyvus
    function differenceInAges(ages){
      return [Math.min(...ages),Math.max(...ages),Math.max(...ages)-Math.min(...ages)]
    }

    //

    const differenceInAges1 = a => (min = Math.min(...a),max = Math.max(...a),[min,max,max-min])

    //

    function differenceInAges(ages){
      let x = ages.sort((a,b) => a - b)[0]
      let y = ages.sort((a,b) => a - b)[ages.length - 1]
      return [x, y, y - x]
    }


    //

    function differenceInAges(ages){

      ages = ages.sort((a,b) => a -b);
      
      let youngest = ages[0];
      let oldest = ages.pop(); //istrina POP paskutini nari, bet tuo paciu ji ir pasiima
      
      
      return new Array(youngest, oldest, (oldest-youngest));
      }


    console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
    console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);
    console.log(differenceInAges1([57, 99, 14, 5]), [14, 99, 75]);


    console.log("--------L1: Bartender, drinks!-------");


    /*Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
*/

function getDrinkByProfession(param){
  const pro=param.toLowerCase();
  if(pro==="jabroni"){
    return "Patron Tequila";  
  }
  if(pro==="school counselor"){
    return "Anything with Alcohol";
  }
  if(pro==="programmer"){
    return "Hipster Craft Beer";
  }   
  if(pro==="bike gang member"){
    return "Moonshine";
  }
  if(pro==="politician"){
    return "Your tax dollars";
  }
  if(pro==="rapper"){
    return "Cristal"; 
  }
  return "Beer";
}

//

const drinks1 = {
  "jabroni": "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  "programmer": "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  "politician": "Your tax dollars",
  "rapper": "Cristal"
}

const getDrinkByProfession1 = profession => drinks1[profession.toLowerCase()] || "Beer";

//
function getDrinkByProfession(param) {
  param = param.toLowerCase()
  let professions = ["jabroni", "school counselor", "programmer", "bike gang member", "politician", "rapper"];
  let drinks = ["Patron Tequila", "Anything with Alcohol", "Hipster Craft Beer", "Moonshine", "Your tax dollars", "Cristal","Beer"];
 
  for (var i = 0; i < professions.length; i++) {
      if (param == professions[i]) {
          return drinks[i];
      }
  } 
  return drinks[drinks.length-1];
}

//

    console.log(getDrinkByProfession("jabrOni"), "Patron Tequila");
    console.log(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol");
    console.log(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer");
    console.log(getDrinkByProfession("bike ganG member"), "Moonshine");
    console.log(getDrinkByProfession("poLiTiCian"), "Your tax dollars");
    console.log(getDrinkByProfession("rapper"), "Cristal");
    console.log(getDrinkByProfession("pundit"), "Beer");
    console.log(getDrinkByProfession("Pug"), "Beer");


    console.log("--------Triple Trouble-------");

    /*E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.
*/

function tripleTrouble(one, two, three){
  return one.split("").map((s, i) => one[i] + two[i] + three[i]).join("");
 }

 const marks=[10,2,8,4,6];
 
//

function tripleTrouble(one, two, three) {
  let result = '';
  for (let i = 0; i < one.length; i++) {
    result += one[i] + two[i] + three[i];
  }
  return result;
}

//
function tripleTrouble(one, two, three){
  return one.replace(/./g,(v,i)=>v+two[i]+three[i])
 }


 //

 console.log(tripleTrouble("aaa","bbb","ccc"), "abcabcabc");
    console.log(tripleTrouble("aaaaaa","bbbbbb","cccccc"), "abcabcabcabcabcabc");
    console.log(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
    console.log(tripleTrouble("Sea","urn","pms"), "Supermans"); 
    console.log(tripleTrouble("LLh","euo","xtr"), "LexLuthor");

console.log("--------Grasshopper - If/else syntax debug-------");


    function checkAlive (health) {
      if (health < 1) {
        
        return false
      } else  {
        return true
      }
    }

    console.log(checkAlive(5), true)
    console.log(checkAlive(0), false)


    //

    function checkAlive(health) {
      return health > 0;
    }

    //


    const checkAlive1 = (health) => health > 0

    //
    const checkAlive2= h => h > 0;


    console.log('-----------Will there be enough space?----------');
    
    

    function enough(cap, on, wait) {

      const availableSeats = cap - on;
      
      if (availableSeats >= wait) {
        return 0;
      } else {
        return wait - availableSeats;
      }
    }

    console.log(enough(10, 5, 5), 0);
    console.log(enough(100, 60, 50), 10);
    console.log(enough(20, 5, 5), 0);
    

    ///

    function enough(cap, on, wait) {
      return Math.max(wait + on - cap, 0);
    }

    //

    function enough(cap, on, wait) {
      return (on+wait > cap) ? on+wait-cap : 0;
    }
    //

    const enough1 = (cap, on, wait) => Math.max(0,wait-cap+on);



    console.log('-----------Super Duper Easy----------');


    function problem(x) {
      if (typeof x === "string") {
        return "Error";
      }
      return x * 50 + 6;
    }


    //

    const problem1 = x => typeof x === 'string' ? 'Error' : x * 50 + 6;


    //
    function problem(x){
      return typeof x === "number" ? x * 50 + 6 : "Error";
    }

    //

    const problem2 = x =>
      Number.isFinite(x) ? x * 50 + 6 : `Error`;

    //

    function problem(x){
      let sum = x * 50 + 6;
      if(x > 0 || x < 0 || x === 0)
      return sum
      else {
      return "Error"
    }
    }

    console.log(problem("hello"), "Error");
    console.log(problem(1), 56);
    console.log(problem(5), 256);
    console.log(problem(0), 6);
    console.log(problem(1.2), 66);
    console.log(problem(3), 156);