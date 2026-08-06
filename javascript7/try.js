//try...catch...finally

try{
 console.log(name)
}catch(error){
 console.log("message:" + error.message)//message:name is not defined
}


//finally 

try{
 console.log(name)
}catch(error){
 console.log("message:" + error.message)//message:name is not defined
}finally{
    console.log("接続終了")
}


//throw

//例外の処理に対してさらにエラーを追加したいときに使う構文です。


x = 4;
y = 6;

try{
    if(y === 6){
        throw new Error(" 6はダメ")
    }

    let z = x / y;

    console.log(Math.round(z));
}catch(error){
    console.log("message:" + error.name + error.message)
}