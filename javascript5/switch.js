//switch 文

/*
switch 文は、複数の条件分岐を行うための構文です。if 文と同様に、条件に応じて異なる処理を実行することができます。

switch (引数)｛
    case 値1:
        処理1
        break;
    case 値2:
        処理2
        break;
    default:
        処理3
}　

*/

let rank = "B";


switch(rank){
    case "A":
        console.log("優秀です");
        break;
    case "B":
        console.log("良いです");
        break;
    default:
        console.log("頑張りましょう");
}



//switch 文の中で、break 文を使用することで、条件に合致した場合に処理を終了することができます。
//もし break 文を使用しない場合、条件に合致した後も次の case の処理が実行されてしまいます。
//fallthrough（フォールスルー）と呼ばれる現象です。

let rank2 = "A";

switch(rank2){
    case "A":
        console.log("優秀です");
        // fallthrough
    case "B":
        console.log("良いです");
        // fallthrough
    default:
        console.log("頑張りましょう");
}