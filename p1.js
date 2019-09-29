//generator 1
function* fibonacci () {
    let [val1, val2, val3] = [0, 1, 1];
    while (true) {
        yield val1;

        val1 = val2;
        val2 = val3;
        val3 = val1+val2;

    }
}

//generator 2
function* evenFibonacci () {
    let myFibs = fibonacci();
    for (fibonacci of fibonacci()){

        if (fibonacci%2===0){
            yield fibonacci;
        }
    }
    }

let myEvenFibs = evenFibonacci();
let count = 6;
while(count --> 0) {
    console.log(myEvenFibs.next().value);
}




