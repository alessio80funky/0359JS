//論理演算子　（データを判断する演算子）：

// && (and)  そして

// || (or)  または

//! (not)  否定演算子

//&& の場合はすべてがtrueでなければならない
//&& の場合はfalse一個でもあればプログラム全体はfalseになります

console.log(5 > 3 && 10 > 7 )//true
console.log(5 > 3 && 10 > 7 && 12 < 9)//false

//|| の場合はが片方だけでもtrueがあれば全体的にtrueになります。
//|| の場合は全部falseでしたら結果はfalse

console.log(5 > 3 || 10 > 7 )//true
console.log(5 < 3 || 10 > 7 )//true
console.log(5 < 3 || 10 < 7 )//false

///否定演算子

console.log(!true);//false 
console.log(!false);//tsure


let age = 20;
let isStudent = true;

if(age >= 18 && isStudent){
    console.log("学生");
}else if (age >= 18 && !isStudent){
    console.log("学生じゃない");
}else{
    console.log("その他");
}






