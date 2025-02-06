function sumInput() {
    let arr = [];
    let num;
    while(true) {
        num = prompt("enter number");
        if(num == null || num === "" || !isFinite(num)){
            break;
        }
        arr.push(+num);
    }
    let sum = 0;
    for(let i of arr) {
        sum += i;
    }
    console.log(sum);
}

sumInput();

