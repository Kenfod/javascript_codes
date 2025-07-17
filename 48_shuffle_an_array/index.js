//  Shuffle an array of cards   = is a methodused to sort elements of an array in place. 
//             It sorts elements as strings in lexicographic order, not alphabetical. 
//             Lexicographic = (alphabet + numbers + symbols) as strings.


// --------- EXAMPLE 1 -----------

// The below method is not uniform in shuffling and is inefficient if the array becomes larger:
const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

cards.sort(() => Math.random() - 0.5);

console.log(cards);


// --------- EXAMPLE 2----------

// Shuffling an array using FISHER-YATES ALGORITHM:
const cards1 = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

shuffle(cards1)

console.log(cards1);

function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));

        // swap 2 elements in an array by destructuring:
        [array[i], array[random]] = [array[random], array[i]];  
    }
}
