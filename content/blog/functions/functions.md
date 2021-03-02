---
title: Functions, Callbacks, and Promises
date: "2021-03-01T23:46:37.121Z"
---

### Functions
Functions are reusable blocks of code. They can take in specified data called parameters, change them, and return new data. 

#### Declaring a function
To declare a function, you can write the ```function``` keyword before the function name. 
``` 
function getSum(a,b) {
    return a + b
}
```
You can also declare a function without a name. This would be an anonymous function and is typically used with an event handler.
```
const myButton = document.querySelector('button')

myButton.onclick = function() {
    alert('You have clicked the button')
}
```


Another way to declare a function is to drop the ```function``` keyword and use a fat arrow. ```=>```. These are called arrow functions. These functions are also anonymous, but the name is inferred from the variable holding the function. Arrow functions are used often in promise chains.
```
const getSum = (a,b) => {
    return a + b;
}
```

#### Returning a value
When a function is finished, it will return a value (or void or undefined).
In custom functions, you have to use the ```return``` keyword. Functions can return values assigned to variables, or you can drop the variable assignment and just return what you want the function to return.
```
function myName(){
    const name = 'Erin';
    return name;
}

function myName(){
    return 'Erin';
}
```
Both functions above do the same thing, but the bottom is more concise. 

#### Accepting values into a function
Parameters are names listed in the function definition. When the function is called, the real values that are passed into the function are called arguments. 
```
function getName(first, last) {
    return first + ' ' + last;
}

getName('Erin', 'Hancock');
//returns Erin Hancock
```
The parameters in this function are ```first``` and ```last```, and the arguments are ```'Erin'``` and ```'Hancock'```. 


### Callbacks
A callback function is a function used as an argument for another function. It is invoked inside the outer function. Callbacks are most often used to execute code after an asynchronous operation has been done. They are used in block chains at the end of a promise once it's been fulfilled or rejected. 
```
const url = 'an api url';

fetch(url)
.then(function(response) {
    return response.data
});
```
Callback functions are used a lot when getting data from an API. This function is fetching data from an API, and then using a callback function to use the response from the fetch call to return the data from that response. 

### Promises
A promise represents the eventual resolution or failture of an asynchronous operation. Promises allow asynchronous methods return values when it's resolved instead of immediately after being called. A ```Promise``` can be pending, fulfilled, or rejected. Pending means it's in its initial state. Fulfilled means the operation was resolved successfully, and rejected means that it failed. Promises are great for when you need to retrieve information before code continues to execute. 

Async/await is special syntax that works with promises and makes them easier to read, use, and understand. To use it, you add the ```async ``` keyword in front of a function, and then inside the function, you can use the ```await``` keyword before a promise and JavaScript will wait until that promise is resolved or rejected and return the result before moving forward. You can ONLY use ```await``` inside async functions.   

```
function delayedResponse() {
    const delay = new Promise(resolve => {
        setTimeout(() => {
            resolve('delayed response');
        }, 2000);
    });
    return delay;
}

async function callDelayedResponse() {
  console.log('calling')
    const result = await delayedResponse();
  console.log(result)
  return result;
}

callDelayedResponse();

//returns 'calling'
//wait two seconds
//returns 'delayed response'
```
In the example above, the async function ```callDelayedResponse()``` waits for ```delayedResponse()``` to resolve its promise before returning. Async/await is much easier to read and understand because the words "asnyc" and "await" do exactly what they mean in the code.  