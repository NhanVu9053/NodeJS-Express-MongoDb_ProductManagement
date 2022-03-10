const axios = require('axios')

exports.homeRoutes = (req,res) =>{
    //Make a get request to /api/books
    axios.get('http://localhost:3000/api/products')
         .then(function(response){
            res.render('index',{books: response.data});
         })
         .catch(err => {
             res.send(err);
         })    
}

exports.add_product = (req,res) =>{
    res.render('add_product');
}

exports.update_product = (req,res) =>{
    res.render('update_product');
}