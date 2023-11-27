/*Write a function factorial() that takes a number as an argument and returns the factorial of the number.

Example:

factorial(6); 
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 

Assume only positive numbers will be given as an argument for the factorial() function. */

/*
    function factorial (number) {
    if (number === 1) {
        return number;
    };
        
        let result = number * (number -1); //first special condition
        number -= 2;

        for (number; number > 0 ; number-- ) {
            result *= number;
        } ;
        return result;
    }
    console.log(factorial(1));
    */


/***************************************/


/*Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0
*/
/*
    function subLength (aString, aChar) {
        //extract string to array as separate characters
        let newStringArray = Array.from(aString)

        let charExists = 0;
        let charPositions = [];
        newStringArray.forEach((elem, index) => {
        if (elem === aChar) { //iterate the array
            charPositions.push(index);
        }
        });
        if (charPositions.length != 2) { //if there's not exactly 2, exit
            return 0;
        };
        console.log(charPositions[1]);
        console.log(charPositions[0]);
        return (charPositions[1] - charPositions[0]) + 1;

    };

    console.log(subLength('funny', 'n'));
*/
/***************************************/
/*
Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'

groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'

groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'
*/

function groceries (_objects) {
    let returnString = '';

    for (let i = 0; i < _objects.length; i++) {
        
        if (i === _objects.length - 2) { //pre last item, add an and.
            returnString += _objects[i].item + ' and ';
        } else if (i === _objects.length - 1) { //last item, no comma.
            returnString += _objects[i].item
        } else {

        returnString += _objects[i].item + ', ';
        };
    };
    return returnString;
};

console.log(groceries( [{item: 'Cheese Balls'}] ));
