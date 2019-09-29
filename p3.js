const cubeNum = array => {

    return array.map(x => Math.pow(x, 3));
}

console.log(`The cube values are: ${cubeNum([1,2,3,4,5,6,7])}`);