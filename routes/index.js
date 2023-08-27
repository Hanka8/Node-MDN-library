//group the route handlers for a particular part of a site together

var express = require('express');
var router = express.Router();

// There are a number of other response methods for ending the request/response cycle. 
// For example, you could call res.json() to send a JSON response or res.sendFile() to send a file. 
// The response method that we'll be using most often as we build up the library is render()

/* GET home page. */
router.get("/", function (req, res) {
  res.redirect("/catalog");
});

// Router functions are Express middleware, which means that they must either complete (respond to) the request or call the next function in the chain

module.exports = router;


// ROUTE PATHS

// The route paths define the endpoints at which requests can be made. 
// The examples we've seen so far have just been strings, and are used exactly as written: '/', '/about', '/book', '/any-random.path'.

// string patterns for route paths:
    // ? : The endpoint must have 0 or 1 of the preceding character (or group), e.g. a route path of '/ab?cd' will match endpoints acd or abcd.
    // + : The endpoint must have 1 or more of the preceding character (or group), e.g. a route path of '/ab+cd' will match endpoints abcd, abbcd, abbbcd, and so on.
    // * : The endpoint may have an arbitrary string where the * character is placed. E.g. a route path of '/ab*cd' will match endpoints abcd, abXcd, abSOMErandomTEXTcd, and so on.
    // () : Grouping match on a set of characters to perform another operation on, e.g. '/ab(cd)?e' will perform a ?-match on the group (cd) — it will match abe and abcde.

// route paths can also be javascript regular expressions


// ROUTE PARAMETERS

// Route parameters are named URL segments that are used to capture the values specified at their position in the URL.
// The named segments are prefixed with a colon and then the name


