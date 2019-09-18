const alphabetical_order = string => {
    let array = string.split("");
    let sorted_array = array.sort();

    return sorted_array.join("");
}

console.log(`The result is: ${alphabetical_order("supercalifragilisticexpialidocious")}`);




