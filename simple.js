// Await and async
async function myFun(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success");
        },2000);
    })
}
async function awaitFun(){
    const output = await myFun();
    console.log(output);
    
}
awaitFun();



