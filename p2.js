const getOperation =  expression => {
    let operator = expression.charAt(1);
    let left = expression.charAt(0);
    let right = expression.charAt(2);

   switch(operator){
       case '+':
           return parseInt(left)+parseInt(right);
           break;

       case '-':
           return parseInt(left)-parseInt(right);
           break;

       case '*':
           return parseInt(left)*parseInt(right);
           break;

       case '/':
           return parseInt(left)/parseInt(right);
           break;


    }

}

const expression1 = '4+2';
console.log(`${expression1} = ${getOperation(expression1)}`);

const expression2 = '5*7';
console.log(`${expression2} = ${getOperation(expression2)}`);

const expression3 = '6-1';
console.log(`${expression3} = ${getOperation(expression3)}`);

const expression4 = '9/2';
console.log(`${expression4} = ${getOperation(expression4)}`);



