const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
const helmet = require("helmet")
const routes = require("./routes/routes")
const db = require('./models')


app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(cors({
    origin: '*'
}))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods', 'Content-Type', 'Authorization');
    next();
})

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

dotenv.config()

app.use(function (req, res, next) {
    res.set('cache-control', 'no-cache , no-store,must-revalidate,max-stale=0,post-check=0,pre-checked=0');
    next();
});

app.use("/api", routes)

db.sequelize.sync().then((res) => {
    app.listen(process.env.PORT, () => {
        console.log("Server Running at Port " + process.env.PORT);
    })
}).catch((err)=>{
    console.log(err.message);
})

