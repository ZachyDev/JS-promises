// create a new promise
let promise = new Promise((resolve,reject)=>{
    // 5. Async Code with Promises
    // setTimeout(()=>{
    //     reject();
    // },3000)
    resolve();
 
});
// create a callback handler
promise
    .then(()=>{
        console.log('Execution complete');
    })
    .then(()=>{
        console.log('The application executed successfully!');
    })
    .catch(()=>{
        console.log('Something went wrong!');
    })

