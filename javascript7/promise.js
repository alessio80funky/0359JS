//非同期処理

//.then()

fetch("./data.json")
.then(x => x.json())
.then(y => console.log(y))
.catch(e => console.log(e))

//async/await

    async function load() {

    try{
    const x = await fetch(data.json);
    const y = await x.json();
    console.log(y);
    }catch(error){
     console.log("message:" + error.name + error.message)
    }

    }
    
load();

