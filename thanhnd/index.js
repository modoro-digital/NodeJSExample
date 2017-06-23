const port = process.env.PORT || 8081;
const app = require('./config/index');
app.listen(port, function(error) {
	if (error) 
		console.error(error)
	console.log("Working: http://localhost:%s", port)
});

