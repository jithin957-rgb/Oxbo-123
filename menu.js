// console.log(5+4)
// let x=5
// x++
// console.log(x)
// let y=10
// console.log(y)

// console.log(50%20)
// let a = 10
// console.log(a+=5)
// let y =20
// console.log(y-+10)
// console.log(y%=50)
// let b = 10
// let c = 10
// console.log(b==c)
// console.log(b!==c);
// console.log(b>c);
// console.log(b<c);
// console.log(b>=c);
// console.log(b<=c);

// let age=20
// console.log(age>=18 && age<=25);
// console.log(age>-21 || age>-30);
// console.log(age|=30);

// let Age=20
// let status = (Age>-17)?"adult":"minor"
// console.log(status)


// let num =17
// let evenodd = (num & 2 == 0)? "Even": "Odd"
// console.log(evenodd);
// let sign = (num >0)? "posetive": "negative"
// console.log(sign);
// let divisible = (num % 3== 0 && num % 5 == 0)? "divisible by 3 and 5": "not divisible by 3 and 5"
// console.log(divisible);
// let a=5
// let b=10
// if (a>b) {
//     console.log("a is large");   
// }else{
//     console.log("b is large");
    
// }
// let age =20
// let license = false
// if (age>30) {
//     console.log("you are an adult");
//     if (license) {
//         console.log("you can drive");
        
//     }else{
//         console.log("you can't drive");
        
//     }
    
// }else{
//     console.log("you are minor");
    
// }
// let x=5
// switch (x) {
//     case 1:
//        console.log("one");
//         break;
//     case 2:
//         console.log("two");
//          break;
//     case 3:
//         console.log("three");
//         break;     
//     default:
//         console.log("invaild case");
//         break;
// }

// let age=18
// let membershipcard ="yes/no"
// if(age>18){
//     console.log("ticket price is 200");
//    if(membershipcard){
//         console.log("ticket price is 250");
        
//     }else{
//         console.log("ticket price is 250");
        
//     }
        
//     }
let age =Number("20")
let membership =("do you have membership(yes/no)")
if (age>18){
    if (membership ==="yes"){
        console.log("ticket price is 200");
        
    }else{
        console.log("ticket price is 250");
        
    }
}else{
    if (membership ==="no"){
        console.log("ticket price is 100");
        
    }else{
        console.log("ticket price is 150");
        
    }
}