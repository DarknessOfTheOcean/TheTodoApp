var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// var data=[{item:'play football'},{item:'play cricket'},{item:'finish homework'},{item:'go gym'}]

var conString ='mongodb://part2:partha123@ds239412.mlab.com:39412/my_employee' 

//connect to the database
mongoose.connect(conString,() => {
    console.log("DB is connected");
    
})
//create model and schema for the database
var Todo = mongoose.model("Todo", {
    item: String
});





module.exports=function(app){
    app.set('view engine','ejs');
    app.listen(8080);
    console.log("hi i m listening to the port 8080");
    
    // ------------the get method---------
    app.get('/todo',function(req,res){
        //get the data from the datbase and render
    Todo.find({},function(err,data){
        if(err) throw err;
        res.render('index',{data:data});
        
    });
   
    });
    // -----------the post method---------
    app.post('/todo',urlencodedParser,function(req,res){
     //store the data to the database  
     var newTodo =Todo(req.body).save(function(err,data){
         if(err) throw err;
         res.json(data);
     }); 
    });
    //--------------the delete method-----------------
    app.delete('/todo/:item',function(req,res){   
        console.log(req.params.item);
        var test=req.params.item;
          
        var target=test.replace(/\-/g,' ');
        
        console.log(target);
        var rec=target.slice(2);
        console.log(rec);
        
        
      Todo.find({item:rec}).remove(function(err,data){
          if(err) throw err;
          res.json(data);
      }).exec();
    });
    // ---------------------
    
};