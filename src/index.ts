import express from "express";
import path from "path";
import { request, Router } from "express";




const routes = Router();
 const app = express();




app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));



 app.use(express.static("public"));

 app.use(routes);

app.get("/",(request,response) => {
    return response.render("../views/index")
});

app.get("/Hard",(request,response) => {
    return response.render("../views/hard")
});

app.get("/soft",(request,response) => {
    return response.render("../views/soft")
});

app.listen(8080, ()=> {
    console.log("servidor rodando na url localhost:8080")
});