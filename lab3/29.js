function Calculator() {
    this.read = function() {
        this.a = +prompt("enter 1st number");
        this.b = +prompt("enter 2nd number");
    },
    this.sum() = function() {
        return this.a + this.b;
    },
    this.mul() = function() {
        return this.a * this.b;
    }
};
  
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );