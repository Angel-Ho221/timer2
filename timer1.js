let time = process.argv.slice(2);
console.log('myArgs: ', time);


const timer = (time) => {

  for (let element of time) { // gives me the element
    if (!isNaN(element) && element >= 0) { than 0
      setTimeout(() => process.stdout.write("\x07"), element * 1000)// 
    }
  }
};
timer(time);
