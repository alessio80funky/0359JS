//if文

/* javascriptのプログラムの構造

javascriptのプログラムの構造は3つです：

順次型：　プログラムが順番に実行される構造です。

選択型：　条件に応じて実行される構造です。(if文、switch文) ->条件分岐

繰り返し型：　条件がtrueである間、繰り返し実行される構造です。(for文、while文)　->反復処理

*/


/*
if(条件式){
  条件式に合致する時に実行される処理
}else{
  条件式に合致しない時に実行される処理
}
*/


let x = 9;

if(x >= 10){
    console.log("10以上です");
}else{
    console.log("10未満です");
}

//elseif 文

///条件が複数ある場合はelseif文を使います。

let score = 80;

if(score >= 90 && score <= 100){
    console.log("A");
}else if(score >= 80 && score < 90){
    console.log("B");
}else{
    console.log("C");
}