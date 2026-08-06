//比較演算子

//評価型「===,!==, ==, !=」

/**
 * == ->  大体同じ 「使わない」
 * === ->　完全に同じ　「実務」
 * != ->  違う　「使わない」
 * !== ->  完全に違う　「実務」
 */

let x = 0 == false;//同じfalsy値
console.log(x);//true

// [==] -> truthyかfalsyか判断します。

let x2 = 0 === 0;
console.log(x2);//true

// [===] -> 値とデータ型を判断します。同じかどうか。

let x3 = 0 != true;
console.log(x3);//false

// [!=] -> truthyかfalsyか判断します。

let x4 = 0 !== "abc";
console.log(x4);//true

// [!==] -> 値とデータ型を判断します。


//大小型「< ,> , <=, >=」

//number型と使う場合

a = 2 > 10; //false
b = 1 < 20; //true

c = 18;
d = 20;

console.log(c <= 20);//true (20を含めて以下）
console.log(d >= 20);//true　(20を含めて以上）

//stringで使う場合

//uncodeベースで判断
//        50      49
let num = "2" > "1000";//true （頭文字で判断）
//          65        97                        
let str = "Apple" > "banana"; //false （頭文字で判断）

