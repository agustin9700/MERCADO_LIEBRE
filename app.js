let express =require("express");
const path=require("path")


let app = express();


app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/",function(req,res){
    const ruta= path.join(__dirname,("/views/home.html"));
    res.sendFile(ruta)
})
app.get("/registro",function(req,res){
    const ruta= path.join(__dirname,("/views/register.html"));
    res.sendFile(ruta)
})
app.get("/login",function(req,res){
    const ruta= path.join(__dirname,("/views/login.html"));
    res.sendFile(ruta)
})

app.listen(3030,()=> //app seria un objeto,dentro tiene metodos. al poner .listen llamamos a esa funcion
    console.log("server iniciado")
);