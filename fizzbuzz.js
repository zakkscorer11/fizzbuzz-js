

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    for (let i = 1; i <= 255; i++) {
        
        let output = [];

        if (i % 3 === 0) {
            output.push('Fizz');
        }
        
        if (i % 5 === 0) {
            output.push('Buzz');
        }

        if (i % 7 === 0) {
            output.push('Bang');
        }

        if (i % 11 === 0) {
            output = ['Bong'];
        }

        if (i % 13 === 0) {
            let lastItemNotBeginningWithB = -1;
            for (let index = 0; index < output.length; index++) {
                if (!output[index].startsWith('B')) {
                    lastItemNotBeginningWithB = index;
                }
            }
            let indexToInsertFezz = lastItemNotBeginningWithB + 1;
            output.splice(indexToInsertFezz, 0, 'Fezz');
        }

        if (i % 17 === 0) {
            output.reverse();
        }

        if (output.length > 0) {
            console.log(output.join(''));
        }
        else {
            console.log(i);
        }

    }

}

// Now we run the main function...
fizzbuzz();
