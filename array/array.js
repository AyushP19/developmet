const courses=["C","C++"];
courses[2]= "python";
courses[3]="java";
courses[8]="javascript";

const arr=new Array(1,3,5,7);
m={"maths":10,"science":50,"English":35,"Hindi":18,"computers":40};


// let sum=0;
// let d1=document.getElementById("d1");
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i];
// }
// arr.forEach(f1);
// function f1(element){
//     sum=sum+element;
// }
// d1.innerHTML=sum;



/*MAP() FUNCTION*/

// const marks = new Array(10,20,30,40,50);
// const updateMarks=marks.map(f1);
// let sum =0;
// let d1=document.getElementById("d1");

// function f1(element){
//     return element+5;
// }
// d1.innerHTML= updateMarks;



/*FILTER() FUNCTION */

// const marks = new Array(10,20,30,40,50);
//  const goodMarks=marks.filter(f1);
//  let sum =0;
//  let d1=document.getElementById("d1");

//  function f1(element){
//      return element>=25;
//  }
//  d1.innerHTML= goodMarks;


/* REDUCE FUNCTION */

// const marks = new Array(10,20,30,40,50);
//  let sum =marks.reduce(f1);
//  let d1=document.getElementById("d1");

// function f1(s,element){
//     return s+element;
//  }
//  d1.innerHTML= sum;



/* Every FUNCTION */

// const marks = new Array(10,20,30,40,50);
//   let sum =marks.every(f1);
//   let d1=document.getElementById("d1");

//  function f1(element){
//     return element>5;
//   }
//   d1.innerHTML= sum;


/* from FUNCTION */

 
const marks = new Array(10,20,30,40,50);
   

   let t="computer";
   let num=[1,2,3,4];
   function f1(element){
     return element**2;
   }
   const a=Array.from(num,f1);

   let d1=document.getElementById("d1");
  d1.innerHTML= a;

