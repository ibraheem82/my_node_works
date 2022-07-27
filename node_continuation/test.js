/* 
JSON.stringify() takes a JavaScript object and then transforms it into a JSON string.
JSON.parse() takes a JSON string and then transforms it into a JavaScript object.
*/
const myObject = {
    dog: "dog",
    cat: "cat",
    koala: "koala",
    count: 3
  };
  
  console.log(JSON.stringify(myObject));
  // result: {"dog":"dog","cat":"cat","koala":"koala","count":3}
  
  console.log(JSON.parse(JSON.stringify(myObject)));
  // result: Object {dog: "dog", cat: "cat", koala: "koala", count: 3}


// * asynchronous codes --
setTimeout(() => console.log('🏃 Finishes'), 4000)





// * synchronous codes --
console.log('🐢 Finishes')
console.log('🏃 Finishes')