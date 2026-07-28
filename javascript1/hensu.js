//変数

/*

変数はでーたのいれものです。
変わる可能性があるデータを取り扱う。

変数はletで始まる。

特徴：再宣言できませんが、再代入できます。

*/
//　変数の宣言  変数名　演算子　　値
    let        name     =     "太郎";

    name = "alex";///データの差し替えが可能です

/*
再宣言の事例：

    let name = "mario"

エラー：
     let name = "mario"
        ^

SyntaxError: Identifier 'name' has already been declared
*/
    console.log(name);

//定数

/*　

 定数もデータの入れ物です。
 変わらないデータを取り扱う。

 定数はconstで始まる。

 特徴：再宣言と再代入もできません。

 データを固定データにしたいときに使う

 */

 //定数の宣言  　定数数名　　演算子　　値
    const       nickname     =     "太郎";
/*
再代入の事例：
  nickname = "alex";

エラー：

 nickname = "alex";
             ^

TypeError: Assignment to constant variable.


再宣言の事例：

const  nickname = "alex";

エラー：

const  nickname = "alex";
       ^

SyntaxError: Identifier 'nickname' has already been declared
  
*/
    console.log(nickname);


//関数

//関数は処理の塊です。つまりデータの処理する処理機です。

let hako = "alice";

function sayHello() {
    //実行したいものをここにいれる
    console.log("Hello" + hako)

};

//宣言関数（関数の呼び出し）
sayHello();

/*

functionの後に関数名をつける（この場合はsayHello）
function sayHello(引数　＝＞　関数に渡すデータ) {
     //実行したいものをここにいれる
    console.log("Hello" + hako)
};
関数の呼び出し
sayHello();

*/



/* Javascriptの記述

①

②

③

④

*/

