const https = require('https');
const args = process.argv;
console.log(args);

https.get(args[2], (resp) => {
    console.log("statusCode: ", resp.statusCode); // <======= Here's the status code
    console.log("headers: ", resp.headers);
}).on("error", (err) => {
  console.log("Error: " + err.message);
});