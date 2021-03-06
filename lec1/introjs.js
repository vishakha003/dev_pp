// a=10;
// let b="vishakha";
// console.log(a);
// console.log(b);

//const

// const pi=3.14;
// console.log(pi);

//== not datatype && === are datatype
// console.log(10==="10");

//OBJECT
// let movie={};//empty object
// let data={
//     name:"steve",
//     place:"Queen"
// }
// let key="name";

// console.log(data.key);

// console.log(data);
// console.log(data.place);

//bracket notation
// console.log(data[key]);
// data.key="i am visdhaka";
// console.log(data);


//array

// let value=[10,
// false,
// {
//     name:"steve",
//     place:"quuen",
// },
// "hey i ma ",
// [1,2,3,4,5]

// ];
// console.log(value);
// console.log(value[4][5]);


//FUNCTION

// function sayhi(){
//     console.log("function say hi");
// }

//func call
// sayhi();




function getfirstname(fullname){//call back
    fullname=fullname.split(" ");
    return fullname[0];
}

function getlastname(fullname){//call back
    fullname=fullname.split(" ");
    return fullname[1];
}

function sayhi(fullname,fun){//high order
    let name=fun(fullname);
    console.log(name);
}

sayhi("tony stark",getfirstname);
sayhi("bruce banner",getfirstname);










