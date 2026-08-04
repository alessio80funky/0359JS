//for文

/*

for (初期化式; 条件式; 増減式) {
実行したい命令をこちらに記述します。
}

*/
//  start       条件    つづき    （続きなければ）＝＞　end
for(let i = 0; i < 10; i++) {
    console.log(i);
}


let a = "abc ";

res = "";

for(let y = 0; y < 10; y++) {
    res += a;
}

console.log(res);



//注意
/*

//無限ループ

//--を使う場合

for(let i = 0; i < 10; i--) {
    console.log(i);
}

//++を使かわない場合

for(let i = 0; i < 10; ) {
    console.log(i);
}


//少数を指定しない

for(let i = 0; i < 10; i += 0.5) {
    console.log(i);
}

//forの中にif文を使うことが可能です。（推奨されないが、使うことができる）

for(let i = 0; i < 10; i++) {
    
    if(i % 3 === 0){
      i++;
    }

    console.log("iの値は" + i + "です")

}

//for文の中に複数の条件を使うことができます。

*/

const products = ["りんご", "みかん", "バナナ", "ぶどう", "もも"];
const prices = [100, 200, 300, 400, 500];

for (let i = 0, len = products.length; i < len; i++) {
    console.log(`${products[i]}の価格は${prices[i]}円です`);
}


const totalItems = 53;

const itemsPerPage = 10;

for(let page = 1, start = 0 ;start < totalItems; page++, start += itemsPerPage) {
                                //スタート地点     範囲を決める記述　math.min(start + itemsPerPage, totalItems)  //totalItemsを超えないようにするための記述
    console.log(`${page}ページ目: ${start + 1}件目から${Math.min(start + itemsPerPage, totalItems)}件目まで表示`);
}

//for..in文(オブジェクト型に使う)

const  user = {
    name: "山田太郎",
    age: 30,
    gender: "男性"
};

for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}

//for..of文(配列に使う)

const fruits = ["りんご", "みかん", "バナナ"];

for (let fruit of fruits) {
    console.log(fruit);
};