async function getRandomNumber() {
    await new Promise(resolve => setTimeout(resolve, 500));
   
    return Math.floor(Math.random()*501);
  }
   
  function f() {
    // shows 10 after 1 second
    getRandomNumber().then(result => alert(result));
  }
   
  f();