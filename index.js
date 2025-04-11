
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
  