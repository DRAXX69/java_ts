let var1 ="Hello, World";
console.log(var1);
// var1 = 1; cannot change type

//run
//npx ts-node day5.ts

// ts implementation
let strVar: string = "Ram";
let numVar: number = 42;
let boolVar: boolean =true;
let anyVar: any = "I can be anything";
anyVar = 123;
let unknownVar: unknown = "I am unknown";
unknownVar = 456;
//strVar = anyVar; //can assign to any string
//strVar = unknownVar; // cannot
console.log(strVar, typeof strVar);
console.log(numVar, typeof numVar);
console.log(boolVar, typeof boolVar);
console.log(anyVar, typeof anyVar);
console.log(unknownVar, typeof unknownVar);
//union 
let unionVar: string | number = "union Type";
unionVar = 100;
//unionVar = true; // cannot
console.log(unionVar, typeof unionVar);

//[]
let arr1: number[] = [1,2,3];
//using Array generic type
let arr2: Array<string> = ["a","b","c"];
let arr3: (string | number)[]= ["a",1,"b",2];
let arr4: any[] = [1, "two", true];
console.log(arr1,arr2,arr3,arr4);

//tuple 
let tupleVar: [string,number]= ["Age", 30];
console.log(tupleVar);

// typescript functions
const add = (a: number,b:number):number => {
    return a + b;
}
console.log(add(5,10));

const calculate = (a: number,b?:number): string =>{
    return "Some result";
}
console.log(calculate(5));
//console.log(calculate(5,10));
const detail = (name: string = "unknown", age: number=0) =>{
    return `Name ${name}, Age: ${age}`;
}
console.log(detail()); //auto return type
console.log(detail("Alice",25));

const fruits: string[] = ["Apple","Cherry","Kiwi","Grapes","Fig"];
//create a function -> filterfruits that takes array of string 
//and number as parameters-> default number is 3
//and returns array of string with length greater than number

//create a function -> countFruits that takes array of string
//and returns number of fruits with length greater than 2

//create a function -> findFruits that takes array of string, search string
//and returns first fruit fount, find fruits must be a promise fn
// resolve is found, reject if not found with error
const findFruits = (fruits: string[], search: string)
    : Promise<string| Error> => new Promise(
        (resolve, reject) => {
            const found = fruits.find(fruit => fruit === search);
            if (found) {
                resolve(found);
            } else {
                reject(new Error("Fruit not found"));
            }
        }
)
findFruits(fruits, "Apple")
    .then(result => console.log("Found:", result))
    .catch(error => console.error("Error:", error));