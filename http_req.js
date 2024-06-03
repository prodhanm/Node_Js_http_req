//const http = require('https');
//in the require function, the 'http' string is being
//passed to the require function, which is a built-in
//to pass the module in the form of a string.
/*
const req = http.request('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`)
    });
    res.on('end', () => {
        console.log('Response has ended');
    });
});

req.end();
/*

/* Without the 'http' string attached to the webite does not execute
and what it get's is an 'ERR_INVALID_URL' error.  */

// without the 'req.end()' function, the request will not be sent.

/* the above example is a way to use require() to import a module. Another
way to import a module is by using the {} in the variable statement to also
import a module. */

const { request } = require('https');
// the above line is importing the 'request' module 
// from the 'https' module. It then cuts the use of 
// the 'http.request' module from the code and only
// uses the 'request' module. 

const req = request('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    });
    res.on('end', () => {
        console.log('Response has ended');
    });
});

req.end();

// the request module can be replaced by the get module,
// and it would do the same thing. A major difference is that, 
// the 'req.end()' function is not needed when using the 'get'. 

//Overall, an import statement is used to import a module,
// which is far cleaner. 

//example of importing a module
//import { request } from 'https';
//import { get } from 'https';