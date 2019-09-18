
const modifyString = (string, operation) => operation(string);

//first expression passing lambda
let result1 = modifyString(
    'supercalifragilisticexpialidocious',
    string => string.split(/(?=c)/g));

console.log(result1);

//second expression passing lambda
let result2 = modifyString(
    'supercalifragilisticexpialidocious',
    //string => replaceA(string)
    string => {

    let originalString = string;
    let modifiedString = "";
    let numLoops = 0;
    let counter = 0;

    for (numLoops = 0; numLoops < string.length; numLoops++)
    {
        if (string[numLoops] == 'a') {
            modifiedString = modifiedString + 'A';
            counter++;
        }

        else
            modifiedString = modifiedString + string[numLoops];
    }

    return ('{' + '\n' +
        'originalString: '+ originalString + '\n' +
        'modifiedString: '+ modifiedString+ '\n' +
        'numberReplaced: '+ counter+ '\n' +
        'length: ' + string.length + '\n' + '}'
    )
});

console.log(result2);