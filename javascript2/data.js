//データ型に関しての注意

//ストリング・ナンバー型を計算するときに注意

let num = "abc" * 3;
console.log(num);//NaN (Not a Number)  文字列と数値を一緒に計算することができません。

///ストリング型に関しての注意


//①シングルクォーテーションとダブルクォーテーションに関しての注意：
///エスケープシーケンスを使う事例：
name = "\"luigi\"";
console.log(name);


name2 = "'mario'";
console.log(name2);
name3 = '"kooppa"';
console.log(name3);
///シングルクォーテーションの中にシングルクォーテーションは使えない。ダブルクォーテーションを使用してください。
///ダブルクォーテーションの中にダブルクォーテーションは使えない。シングルクォーテーションを使用してください。


///②バッククォーテーションに関しての注意：

let code = 123456789029384858;

let word = `code:${code}`;//テンプレート文字列

console.log(word);

console.log("java" + "script");
console.log("java" + 10);
//            20          101010
console.log(10 + 10 + "10" + 10 + 10);


//配列に関しての補足

//配列は順番にデータを管理する箱です。
//              0         1         2
let fruit = ["apple", "banana", "orange"];//インデックス番号


console.log(fruit);
console.log(fruit[0]);///配列のプロパティの指定
console.log(fruit[1],fruit[2])

///配列のネスト
//              0         1         2
let num2 = [ [1,2,3], [4,5,6,], [7,8,9]];

console.log(num2[1][0]);//4


//オブジェクトに関しての補足です。

let human = {
//　キー    値
    name: "太郎",
    age:20

}

console.log(human.age);//オブジェクトのプロパティの指定
console.log(human.name, human.age)

//オブジェクトのネスト

let human2 = {
//　キー    値
    name: "太郎",
    age:20,
    adress:{
        city:"Osaka",
        ward: "chuo-ward",
    }
}

console.log(human2.adress.city)

//関数に関しての補足：

//関数は処理の塊です。つまりデータ処理する処理機です。

//function式

let name4 = "alice";

function sayHello(){
    console.log(`Hello ${name4}`);
};

sayHello();

//関数名宣言式

let hello = function(){
    console.log(`You're name is ${name4}?`);
};

hello();

//アロー関数

let Aisatsu = () => {
    console.log(`Yes I'm ${name4}`);
}

Aisatsu();

//引数

let naming = "taro";
let naming2 = "saburo";

function greet(naming, naming2){
    console.log("こんにちは" + naming + "さん");
    console.log("こんにちは" + naming2 + "さん");
};

greet(naming ,naming2);


//戻り値を使う場合
x = 4;
y = 2;

total = [];

function add(a, b){
    return total = a * b; ///データを処理して返す
};

add(x, y);

console.log(total);

