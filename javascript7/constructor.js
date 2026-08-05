//コンストラクター

//0から構築するコンストラクター

function Human(name, age){
    this.name = name;
    this.age = age;

    this.greet =function(){
     console.log(`こんにちは、私は${this.name}です！`)
    } 
}


const taro = new Human("太郎", 30)
const alessio = new Human("Alessio", 36)


console.log(taro.name);//太郎
console.log(taro);//Human { name: '太郎', age: 30 }

taro.greet()//こんにちは、私は太郎です！
alessio.greet()//こんにちは、私はAlessioです！

//必ず　newをつけてください。

//ただし、new をつけないコンストラクターを存在します。

const text = String(100);
const number = Number("100");

console.log(text);
console.log(typeof text);

console.log(number);
console.log(typeof number)

// new をつけた場合 -> オブジェクトとして作られます。


const x = new String(100);
const y = new Number("100");

console.log(x);
console.log(typeof x);

console.log(y);
console.log(typeof y)