var QuanLySanPhamDb = require('../model/model');

//create amd save new product

exports.create = (req,res) => {
    //validate request
    if(!req.body){
        res.status(400).send({ message: "Content can not be empty"});
        return;
    }

    //new product
    const book = new QuanLySanPhamDb({
        bookName: req.body.bookName,
        author: req.body.author,
        status: req.body.status
    })

    //save product in database
    book
    .save(book)
    .then(data => {
        res.send(data);
        // res.redirect('/add-product');
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating a create operation"
        });
    });
}

//retrive and return all users/retrive and return a single user
exports.find = (req,res) => {
    if(req.query.id){
        const id = req.query.id;
        QuanLySanPhamDb.findById(id)
                        .then(data => {
                            if(!data){
                                res.status(404).send({message: "book is not found"})
                            }
                            else{
                                res.send(data);
                            }                     
                        })
                        .catch(err =>{
                            res.status(500).send({message: err.message || "Some error occurred while find book information"})
                        })
    }
    else{
        QuanLySanPhamDb.find()
        .then(book => {
            res.send(book)
        })
        .catch(err =>{
            res.status(500).send({message: err.message || "Some error occurred while find book information"})
        })
    }
   
}

//Update a new idetified product by productId
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    QuanLySanPhamDb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe book not found!`})
            }else{
                res.send({
                    "data": `${data}`,
                   
                    "message":"book is updated",
                    })
                    console.log(data.bookName);     
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update book information"});
        });
}


//Delete a new idetified product by productId
exports.delete = (req,res) => {
        const id = req.params.id;
        QuanLySanPhamDb.findByIdAndDelete(id)
                        .then(data => {
                            if(!data){
                                res.status(400)
                                    .send({message: `Cannot Delete user with ${id}. Maybe book not found!`})
                            }
                            else
                            {
                                res.send({message: "Book is delete success !"})
                            }
                        })
                        .catch(err =>{
                            res.status(500)
                                .send({message: "Error Delete book information"})
                        })
}