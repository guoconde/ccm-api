import app from './app.js';
var port = process.env.PORT || 4000;
app.listen(port, function () {
    console.log("Server is listening on port ".concat(port));
});
