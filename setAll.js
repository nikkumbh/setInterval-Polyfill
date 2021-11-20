// set timeout
// function greet(){
//     console.log("hello")
// }
// setTimeout(greet,2000);

// console.log("bye")

// set interval 
// executes the function in intervals


// let counter = 0

// function sayHi(){
//     counter++
//     console.log("hiii")
//     if(counter>=3){
//         clearInterval(intervalID)
//     }
// }

// let intervalID = setInterval(sayHi,2000)
// sayHi()

// polyfill of set interval
// this is the polyfill of setInterval


// function createSetInterval() {

//     let intervalID = 0;
//     let intervalMap = {}

//     function setIntervalPolyfill(callback, delay = 0, ...args) {
//         var id = intervalID++;
//         function repeat() {
//             intervalMap[id] = setTimeout(() => {
//                 callback(...args)

//                 if (intervalMap[id]) {
//                     repeat()
//                 }
//             }, delay);
//         }
//         repeat()
//         return id
//     }

//     function clearIntervalPolyfill(intervalID) {
//         clearTimeout(intervalMap[intervalID])
//         delete intervalMap[intervalID]
//     }

//     return {
//         setIntervalPolyfill,
//         clearIntervalPolyfill
//     }
// }

// const {
//     setIntervalPolyfill,
//     clearIntervalPolyfill
// } = createSetInterval()

// let counter = 0
// let intervalid 

// function  greeting() {
//     counter++
//     console.log("hiii")

//     if(counter>=3){
//         clearIntervalPolyfill(intervalid)
//     }
// }

// intervalid = setIntervalPolyfill(greeting,2000)