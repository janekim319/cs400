function* spitWords (string) {

    yield* string.split(" ");
}

for (spitWords of spitWords("All I know is something like a bird within her sang")){
    console.log(spitWords);
}