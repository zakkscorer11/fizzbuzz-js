

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    for (let i = 1; i <= 105; i++) {
        
        let output = '';

        if (i % 3 === 0) {
            output += 'Fizz';
        }
        
        if (i % 5 === 0) {
            output += 'Buzz';
        }

        if (i % 7 === 0) {
            output += 'Bang';
        }

        if (output.length > 0) {
            console.log(output);
        }
        else {
            console.log(i);
        }

    }

}

// Now we run the main function...
fizzbuzz();
