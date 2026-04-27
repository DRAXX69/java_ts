//syncronous and asymcronous
//macri task
setTimeout (
    () => {
        console.log("Hello World");
    },
    200 //2 sec
);
console.log("End of the program");
 
//micro task
const promiseExample = () => new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                resolve("Promise Success")
            },
            1000 // 1 sec
       
        );
    }
);
promiseExample()
.then(result => console.log(result))
.catch(error => console.log(error));
 
console.log("After promise");
 
//syncronous execution
const main = async () => {
    console.log("start of main function");
    const result = await promiseExample();
    console.log(result);
    console,log("End of main function");
}
 
main();
 
//1. syncronously call isEven and Ispositive function in same Block
//2. using.then and. catch call isEven then ispositive sequentially
 const synchronousCheeck = async () => {
   
 
    //use both await here
    const evenREsult = await isPositive(2);
    console.log(evenResult);
    const PositiveResult = await isPositive(2);
    console.log(positiveResult);
 }
 
 //2
 isEven(2)
 .then((result) => {
    console.log(result);
    return isPositive(4);
})
.then((result) => console.log(result))
.catch((error) => console.log(error));
isEven(-3)
.then((result) => {
    console.log(result);
    return isPositive(-3);
}
).then((result) => console.log(result))
.catch((error) => console.log(error));