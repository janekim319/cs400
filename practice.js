
const modifyString = (string, operation) => operation(string);

//first expression passing lambda
let result1 = modifyString(
    'supercalifragilisticexpialidocious',
    string => string.split(/(?=c)/g));

console.log(result1);


//helper function for second expression
// const replaceA = string => {
//
//
//     let originalString = string;
//     let modifiedString = "";
//     let numLoops = 0;
//     let counter = 0;
//
//     for (numLoops = 0; numLoops < string.length; numLoops++)
//     {
//         if (string[numLoops] == 'a') {
//             modifiedString = modifiedString + 'A';
//             counter++;
//         }
//
//         else
//             modifiedString = modifiedString + string[numLoops];
//     }
//
//     return ('{' + '\n' +
//         'originalString: '+ originalString + '\n' +
//         'modifiedString: '+ modifiedString+ '\n' +
//         'numberReplaced: '+ counter+ '\n' +
//         'length: ' + string.length + '\n' + '}'
//         )
// }

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





/*

//first expression

const newArray = string => string.split('c');
let result = newArray('supercalifragilisticexpialidocious');
//result is an array
let i;
for (i=1; i<result.length; i++){
    result[i]='c'+result[i];
}
console.log(result);

*/

/*
//second expression or could be a helper function
const replaceA = string => {


    let originalString = string;
    let modifiedString = "";
    let i = 0;
    let counter = 0;
    for (i = 0; i < string.length; i++)
    {
        if (string[i] == 'a') {
            modifiedString = modifiedString + 'A';
            counter++;
        }

        else
            modifiedString = modifiedString + string[i];
    }

    return (
        'originalString: '+ originalString + '\n' +
        'modifiedString: '+ modifiedString+ '\n' +
        'numberReplaced: '+ counter+ '\n' +
        'length: ' + string.length)
}
*/
//console.log(replaceA('supercalifragilisticexpialidocious'));





