const port = process.env.PORT || 3000;
const app = require('./controllers/config');
/* istanbul ignore next */
if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}
