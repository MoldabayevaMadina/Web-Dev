let calculator = {
    read() {
        this.a = +prompt("enter 1st number");
        this.b = +prompt("enter 2nd number");
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );