//37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function make_shirt(size = "L", message = "I love typescript!"): void{
    console.log(`I'm making a ${size} T-shirt with the message "${message}".`);
}

make_shirt()