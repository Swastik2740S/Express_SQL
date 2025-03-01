const express = require('express'); //express import 
const db = require('./config/db');
const cors = require('cors');
const postroute = require('./routes/postRoutes')
const app = express();  //this is an instance of the express which will use all the express functionalities.
//app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));



app.get("/",(req,res) => {
    res.send("Blog api running");
});

app.use("/api",postroute);

const port = 5000;

app.listen(port,()=>console.log(`Server running on ${port}`));


