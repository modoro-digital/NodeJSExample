const port = process.env.PORT || 3000;
const app = require('./config/app');
app.listen(port, function(error) {
	if (error) 
		console.error(error)
	console.info("==> 🌎  Open up http://localhost:%s/ in your browser.", port)
});