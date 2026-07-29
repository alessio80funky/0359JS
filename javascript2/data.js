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


//オブジェクトに関しての補足です。

let human = {
//　キー    値
    name: "太郎",
    age:20

}

console.log(human.age);//オブジェクトのプロパティの指定
console.log(human.name, human.age)


let human2 = {
//　キー    値
    name: "太郎",
    age:20

}