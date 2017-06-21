var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');
var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: ' Bao Loc',
        description: 'ao ao',
        price: 100
    }),
    new Product({
        imagePath: 'http://files.vforum.vn/2015/T10/img/vforum.vn-233771-autumn-2.jpg',
        title: 'Dang Bao Loc',
        description: 'ao ao',
        price: 100
    }),
    new Product({
        imagePath: 'http://files.vforum.vn/2015/T10/img/vforum.vn-233771-autumn-4.jpg',
        title: 'Dang Bao Loc',
        description: 'ao ao',
        price: 100
    }),
    new Product({
        imagePath: 'http://files.vforum.vn/2015/T10/img/vforum.vn-233771-autumn-7.jpg',
        title: ' Bao Loc',
        description: 'ao ao',
        price: 100
    }),
    new Product({
        imagePath: 'http://files.vforum.vn/2015/T10/img/vforum.vn-233771-autumn-10.jpg',
        title: 'Dang Bao Loc',
        description: 'ao ao',
        price: 100
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Dang',
        description: 'ao ao',
        price: 100
    })
];

var done = 0;
for( var i = 0;i < products.length;i++){
    products[i].save(function (err, result) {
       done++;
       if (done === products.length){
           exit();
       }
    });
}
function exit() {
    mongoose.disconnect();
}