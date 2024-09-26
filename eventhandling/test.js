function f1(c) {
    // alert(this); 
    var p = document.getElementsByTagName("p");
    for (let i = 0; i < p.length; i++) {
        p[i].style.color = c;
    }
}

// function f2() {
//     alert(this); 
//     var p = document.getElementsByTagName("p");
//     for (let i = 0; i < p.length; i++) {
//         p[i].style.color = "green";
//     }
// }




// function f2(){
//     var e=document.getElementById("head2");
//     e.style.visibility="hidden";
// }

// function f3(){
//     var e=document.getElementById("head2");
//     e.style.visibility="visible";
// }
// function add(){
//     let a = document.getElementById("fno");
//     let b = document.getElementById("sno");
//     let para = document.getElementById("result");
//     para.innerHTML="sum is "+(parseInt(a.value)+ parseInt(b.value));
    
// }




var f=document.forms;
var e=document.getElementById("head2");
e.innerHTML="Hello"
e.style.color="red"
e.style.textAlign="center"
