// CRUD OPERATIONS Againest Mobile collection from JSON file

var mobiles=require('../data/products.json');

//HTTP callback functions

exports.getAll=function (req, res){
res.send(mobiles);
};

exports.getById=function(req,res){
    var idmobile=req.params.mobileid-1;
    res.send(mobiles[idmobile]);
};

exports.insert=function(req, res){
    var data=req.body;
    console.log(data);
    console.log("POST request is being processed...");
    //append this data to flowers array maintained in json file
};

exports.update=function(req,res){
    var data=req.body;
    console.log(data);
    console.log("PUT request is being processed...");
    //append this data to flowers array maintained in json file
};

exports.delete=function(req,res){
    var idmobile=req.params.mobileid-1;
    console.log("Item to deleted....." + idmobile);
    console.log("DELETE request is being processed...");
};
