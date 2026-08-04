//forEach

//配列の要素を順番に処理するためのメソッドです。（反復メソッド）配列にしか使われない

//従来のfor文を使った場合
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//forEachを使った場合
numbers.forEach(function(number) {
    console.log(number);
});

//デフォルトの引数が用意されています。デフォルトの引数は、value, index, arrayです。

numbers.forEach((value, index, array) => {
    console.log(`Value: ${value}, Index: ${index}, Array: ${array}`);
});


const scores = [100, 80, 90, 70, 10];

scores.forEach(function(score){
    if (score >= 80){
        console.log(score + "合格")
    }else{
        console.log(score + "不合格")
    }
})