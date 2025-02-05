function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  }
  
  let x = +prompt("enter x");
  let n = +prompt("enter n");
  
  if (n >= 1) {
    alert( pow(x, n) );
  } else {
    alert(`n must be a postitive integer`);
  }