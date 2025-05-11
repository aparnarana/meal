// console.log("testing");
// /*let a=3;
// let b=5;
// //for Airthmatic Operators.
// console.log(a+b); console.log(a*b);
// console.log(b-a); console.log(b/a);
// console.log(b%a);


// //for Assignment Operators.
// console.log(a==b); console.log(a+=3);
// console.log(b-=3); console.log(a*=3);
// console.log(a/=2); console.log(a%=3);


// //For Comparison Operators.
// console.log(a>b); console.log(a==b);
// console.log(a<b);  console.log(a<=b); 
// console.log(a>=b);  console.log(a!=b); 

// //logical Opeartors.
// console.log(a==b && a<b  &&  a<=b);
// console.log(a==b || a<b  ||  a<=b);
// console.log(!( a<b  &&  a<=b));

// //strict type or loosely typed language...
//  let c=3;
//  //for strictly type language.
//  if(c==="3")
//  {
//     console.log("true");
//  }else{
//     console.log("false");
//  }

// //for loosely typed language.
//  if( c=="3")
//  {
//     console.log("true");
//  }else{
//     console.log("false");
//  }
 
// //falsy values  -> 0, null, undefined ,  NaN, false,
// let d='';
//  if(d){
//     console.log("d is true.");
//  }else{
//     console.log("d is false.")
//  }


//  //type of conversion:->
//  // typeof()  this function is used for checking for variable data type.

//  console.log(typeof(c));
//  let e="hello";
//  console.log(typeof(e));
 

//  //type of coercion:->

//  let result= 10+'500'-200+100+'500'-120-300+'100';
//  console.log(result);
//  let result1=10+'200'-150+50+'300'-100+200+'200';
//  console.log(result1);
//  let result2 = 10+'600'+200-100+'200'+50+'50';
//  console.log(result2);
//  let result3 = 30+70+'200'+50+50+'700';
//  console.log(result3);
//  let result4 = 30+70+'300'-100+300+'500';
//  console.log(result4);
//  let result5 = 30+30+'400'-300+800+'300';
//  console.log(result5);



//  //Control Statements :->
//  // 1. Condition,  2.Looping,  3.Jump
//  //1. Condition statements....if, if-else, nested-if, ladder-if,  switch,ternary operators
//  let g=10;
//  let h=15
//  if(g>h){
//     console.log("g is greater than h");
//  }else{
//     console.log("g is less than h");
//  }

//  let number= 1024;
//  if(number%2==0)
//  {
//     if(number%4==0)
//     {
//         if(number%100==0)
//         {
//             console.log("completely divisible");  
//         }else{
//             console.log("Not divisible.");
//         }          
//     }else{
//         console.log("Not divisible.");
//     }
   
//  }else{
//     console.log("Not divisible.");
//  }

// //ladder if:->
//  let marks = 78;
//  if(marks>90 && marks<=100)
//     {
//         console.log("Grade A");
//     } else if(marks>80 && marks<=90)
//     {
//         console.log("Grade B");
//     }else if(marks>35 && marks<=80)
//     {
//         console.log("Grade C");
//     }else if(marks<35 && marks<=34)
//     {
//         console.log("Fail");
//     }else{
//         console.log("pass");
//     }


// //Switch Statements :->
// let day= 0;
// switch(day){
//     case 1 : console.log("Today is Monday");
//     break;
//     case 2 : console.log("Today is Tuesday"); 
//     break;
//     case 3: console.log("Today is Wednesday");
//     break;
//     case 4: console.log("Today is Thursday");
//     break;
//     case 5: console.log("Today is Friday");
//     break;
//     case 6: console.log("Today is Saturday");
//     break;
//     case 7: console.log("Today is Sunday");
//     break;
//     default:console.log("Today is Off");
// }

// //Ternary Operator:-> one linear if-else.
//  let A=70;
//  let B=20;
//  let C=(A>B)?'A is greater than B':'B is greater than A';
//  console.log(C);
// */

// let a= 20;
// let b= 15;
// let c= 6;
// if(a>b && a>c)
//     {
//     console.log("a is greater than b and c.");
// }else if(b>a && b>c){
//     console.log("b is greater than a and c");
// }else{
//     console.log("c is greater than a and b.");
// }

// //3rd Answer.
// for(i=0; i<20; i++)
// {
//    if(i=i+1)
//         console.log(i);
// }


// for(i=0; i<=10; i++)
// {
//     console.log(i*2);
// }

// //2nd answer.
// let x=4;
// let y=5;
// let z=0;
// console.log("before swapping");
// console.log("x=",x);
// console.log("y=",y);


// let f=x;
// let x=e;
// let e=f;
// console.log("after swapping");
// console.log("x=",x);
// console.log("e=",e);


// let x = 10;
// let y = 20;
// let z = 0;

// z = x;
// x = y
// y = z

// 1st Answer.
//  let string="Hello World";
//  let split = string.split("").reverse( ).join(" ");
//  console.log(split);
 
// // 2nd Answer.
//  let number =12321;
//  let reverse =0;
//  let remainder;
//  while(number!=0){
//    remainder=number%10;
//    reverse= reverse*10+remainder;
//    number=Math.trunc(number/10)
//  }
//  console.log(reverse);

//  //3rd Answer.
//   let str = "racecar";
//   console.log("Before palindrome:- " + str);
//   let palindrome = str.split("").reverse( ).join("");
//   console.log("After Palindrime:- " + palindrome);


//   //4th Answer.
//   let num = 1;
//   for(num=1; num<=10; num++){
//    temp=0;
//    for(i=2; i<=num-1;  i++)
//       {
//        if(num%i==0)
//          temp=1;
//       break;
//       }
//   }
//       if(temp==0){
//          console.log(i +" is not a Prime Number");
//       }
//       if(temp==1)
//        {
//          console.log(i +" is a Prime Number");
//        }
 

//5th question.
//  for(x=1; x<=50; x++)
//  {
//    if(x%3==0 && x%5==0)
//       {
//          console.log("fizzbuzz");
//       }else if(x%3==0){
//       console.log("fizz");
//    }else if(x%5==0){
//       console.log("buzz");
//    }else{
//       console.log(x);
//    }
   
//  }
  
//  let originalnumber=number;
//  sum=0;
//  let numberofdigit=number.toString().length;
//  while(number>0){
//    let digit= number%10;
//    sum +=Math.pow(digit,numberofdigit);
//    number=Math.floor(number/10);
   
//  }
//   let originalnumbers=153;
//   let u=1;
//   let v=5;
//   let w=3;
//   let x=Math.pow(u,3);
//   let y=Math.pow(v,3);
//   let z=Math.pow(w,3);
//   let t= x+y+z;
//   if(originalnumbers==t){
//    console.log(t +" is an Armstrong Number");
//   }else{
//    console.log(t +" is not an Armstrong Number");
//   }


//   let numbers=153;
//   let count=0;
//   while(numbers!=0){
//    remain=numbers%10;
//    count+=1;
//    numbers=Math.trunc(numbers/10);i
//    console.log(numbers);
//  }


//   let numbers=153;
//   let sum=0;
//   let stringNumber=numbers.toString();
//   let numberlength=stringNumber.length;
//   console.log(numberlength);
//   for(m=0; m<=numberlength; m++){
//    let digit = parseInt(stringNumber[i]);
//    sum += Math.pow(digit,numberlength);
//    if(sum===parseInt(numbers))
//    {
//       console.log(number +" is an Armstrong Number.");
//    }else{
//       console.log(number +" is not an Armstrong Number.");
//    }

//   }
// 1st Answer.
/*let age=8;
  if(age<12)
  { 
    console.log("Ticket price is 5 Rup.");
  } else if(age>12 && age<18){
    console.log("Ticket price is 10 Rup.");
  } else if(age>12 && age >18 && age<60){
    console.log("Ticket price is 20 Rup.");
  } else if(age>60){
    console.log("Ticket price is 15 Rup.");
  } else{
    console.log("Ticket price is 5 Rup.");
  }

//2nd Answer. +ve or -ve.

num=-66;
if(num>=0 && num<=Infinity)
{
  console.log(num + " is a Positive number.");
} else {
  console.log(num+ " is a negative number.");
}


//3rd Answer. discount.
let price=80;
if(price>=100){
  console.log("You got a Discount of 20 Rup.");
} else if(price>=50 && price<100){
  console.log("You got a Discount of 10 Rup.");
}else{
  console.log("You did not receive any Discount.")
}

//4th Answer. Under Weight.
let weight= 65;
let height= 5;
let bmi= weight/(height*height);
if(bmi<2){
  console.log(bmi +" Under Weight.")
}else if(bmi<=2.6){
  console.log(bmi +" Normal Weight.")
}else{
  console.log(bmi +" Over Weight.")
}

//5th Answer. Anagram.
let strn= "smile";
let strn1= "limesm";
if(strn.length===strn1.length)
{
  let ana = strn.split("").sort().join("");
  let ana1= strn1.split("").sort().join("");
  if(ana ===ana1)
  {
    console.log(  strn1+ " is a Anagram Word");
  }else{
    console.log(strn1 + " is not a Anagram Word");
  }
}else{
  console.log("This word is not a Anagram word , because their length are not equal.")
} 

//6th Answer. sum of 7 multiple.
let sum = 0;
for(i=1; i<=50; i++)
{
  if(i%7==0)
  {
    //console.log(i);
    sum +=i;
      
  }   
}
console.log(sum);

//7th Answer. UpperCase/Capital Letters.
let sen="my name is ";
let sen1="ram";
let sen2 = sen1.toUpperCase();
console.log(sen + sen2);


//8th Answer. Factorial.
let factorial= 1;
for(j=1; j<=5; j++)
{
 factorial *= j;
}
console.log(factorial);

//9th Answer.
let string1= "aparna";
let count  = {};
for(let indexs = 0; indexs < string1.length; indexs++)
{
let char1=string1[indexs];
if(count[char1]){
  count[char1]++
}else{
  count[char1]=1;
}
}
console.log(count);


//10th Answer.
let char= "b";
if(char=="a" || char=="e" || char=="i" || char=="o" ||  char=="u")
{
  console.log("yes");
}else{
  console.log("no");
}

//11th Answer.
let char1="Beautiful voice";
let vowel1= "aeiou";
let counts=0;
for(let k=0; k< char1.length; k++){
  let ch1= char1[k];
  let ch2= char1[k + 1];
  
  if(vowel1.includes(ch1) && vowel1.includes(ch2))
  {
    console.log("Consequent Vowel = " + ch1+ch2);
    counts++;
  }
}
console.log("Total Consequent Vowel Pair =" + counts);




//12th Answer.
let string = "booleon";
let vowels = "aeiou";
let vowel_count = {};
for (let index = 0; index < string.length; index++) {
  const char = string[index];
  if(vowels.includes(char)){
    vowel_count[char] = (vowel_count[char] || 0) + 1;
  }
}
console.log(vowel_count);


//13th Answer.
let student=[ {name:"Shyam",marks:[89,65,78]},
              {name:"Rajan", marks:[90,70,75]},
              {name:"Ram", marks:[30,45,35]}
            ];
let marks=0;
let topmarks={};
      for(let n=0; n<student.length; n++)
      {
        let total=0;
        for(let p=0; p<student[n].marks.length; p++)
        {
          total+=student[n].marks[p];
        }
        if(total>marks){
          marks=total;
          topmarks=student[n];
        }
      }
      console.log(topmarks); */

//Functions ->  3 ways to write function in js...........

 //1. Traditional Function
function calcAge(birthYear){
  console.log(2025-birthYear)
}
calcAge(2000)


//2. Function Expression.
let calc=function calcAge(birthYear){
  console.log(2025-birthYear)
}
calcAge(2015);

//3rd Arrow Function.
let agecalc=(birthYear)=>{console.log(2025-birthYear)}
calcAge(2010);

//1st Answer.
function ticket(age){
  if(age<12)
  { 
    console.log("Ticket price is 5 Rup.");
  } else if(age>12 && age<18){
    console.log("Ticket price is 10 Rup.");
  } else if(age>12 && age >18 && age<60){
    console.log("Ticket price is 20 Rup.");
  } else if(age>60){
    console.log("Ticket price is 15 Rup.");
  } else{
    console.log("Ticket price is 5 Rup.");
  }
}
ticket(50);

// 2nd Answer.
function number(num){
if(num>=0 && num<=Infinity)
{
  console.log(num + " is a Positive number.");
} else {
  console.log(num+ " is a negative number.");
}
}
number(-55);

//3rd Answer.
function discount(price){
if(price>=100){
  console.log("You got a Discount of 20 Rup.");
} else if(price>=50 && price<100){
  console.log("You got a Discount of 10 Rup.");
}else{
  console.log("You did not receive any Discount.")
}}
discount(110);

//4th Answer.
function bmi(weight,height){
let bmi= weight/(height*height);
if(bmi<2){
  console.log(bmi +" Under Weight.")
}else if(bmi<=2.6){
  console.log(bmi +" Normal Weight.")
}else{
  console.log(bmi +" Over Weight.")
}}
bmi(65,5);

//5th Answer
function anagram(strn,strn1){
if(strn.length===strn1.length)
{
  let ana = strn.split("").sort().join("");
  let ana1= strn1.split("").sort().join("");
  if(ana ===ana1)
  {
    console.log(  strn1+ " is a Anagram Word");
  }else{
    console.log(strn1 + " is not a Anagram Word");
  }
}else{
  console.log("This word is not a Anagram word , because their length are not equal.")
} }
anagram("smile","limes");

//6th Answer.
function multiple(sum){
for(i=1; i<=50; i++)
{
  if(i%7==0)
  {
    //console.log(i);
    sum +=i;
      
  }   
}
console.log(sum);}
multiple(0);

//7th Answer.
function name(sen1){
let sen="my name is ";
let sen2 = sen1.toUpperCase();
console.log(sen + sen2);}
name("shyam");

//8th Answer.
function fact(factorial){
for(j=1; j<=5; j++)
{
 factorial *= j;
}
console.log(factorial);}
fact(1);

//9th Answer.
function char(string1){
let count  = {};
for(let indexs = 0; indexs < string1.length; indexs++)
{
let char1=string1[indexs];
if(count[char1]){
  count[char1]++
}else{
  count[char1]=1;
}
}
console.log(count);
}
char("aparna");

//10th Answer.
function character(char){
if(char=="a" || char=="e" || char=="i" || char=="o" ||  char=="u")
{
  console.log("yes");
}else{
  console.log("no");
}
}character("i")

//11th Answer.
function sen(char1){
let vowel1= "aeiou";
let counts=0;
for(let k=0; k< char1.length; k++){
  let ch1= char1[k];
  let ch2= char1[k + 1];
  
  if(vowel1.includes(ch1) && vowel1.includes(ch2))
  {
    console.log("Consequent Vowel = " + ch1+ch2);
    counts++;
  }
}
console.log("Total Consequent Vowel Pair =" + counts);
} 
sen("Beautiful voice");

//12th Answer.
function word(string){
let vowels = "aeiou";
let vowel_count = {};
for (let index = 0; index < string.length; index++) {
  const char = string[index];
  if(vowels.includes(char)){
    vowel_count[char] = (vowel_count[char] || 0) + 1;
  }
}
console.log(vowel_count);
}
word("booleon");

//13th Answer.
function record(student){
let marks=0;
let topmarks={};
      for(let n=0; n<student.length; n++)
      {
        let total=0;
        for(let p=0; p<student[n].marks.length; p++)
        {
          total+=student[n].marks[p];
        }
        if(total>marks){
          marks=total;
          topmarks=student[n];
        }
      }
      console.log(topmarks);
}
record([ {name:"Shyam",marks:[89,65,78]},
  {name:"Rajan", marks:[90,70,75]},
  {name:"Ram", marks:[30,45,35]}
]);


//ARRAY PREBUILD FUNCTION.

//push function.
let arr=[10,20,30,40,50];
//console.log(arr);

arr.push(60);
//console.log(arr);

arr.unshift(0)
arr.pop(arr)
arr.shift(arr)
console.log(arr);

let detail={
  name:"Ram",
  city:"chandigarh",
  id:101,
  score:{
    math:[55,80,70],
    eng :[89,65,45],
    comp:[90,89,99],
    pract:{
      math:29,
      eng:25,
      comp:{ 
        practcomp:[30,59,49]}
    }
  }
}
console.log(detail.score.pract.comp.practcomp[2]);
