//Initialisation
const express = require("express");
const app = express();

// kya kya require hai
const chatRoute = require("./routes/chatBot");
const emailRoute = require("./routes/Emailme");
require("dotenv").config();
const cors = require('cors');
// const path = require('path');
// const _dirname = path.resolve();

// usefull to start
app.use(cors({
    // origin: '*',
    origin: 'https://NakulKumar.onrender.com',
    credentials: true
}))
app.use(express.json());

//Routes
app.use("/ask",chatRoute);
app.use("/email",emailRoute);
// app.get("/health", (req, res) => {  // for uptimeRobot
//   res.status(200).json({
//     status: "ok",
//     message: "Server is running"
//   });
// });



// serving Frontend
// app.use(express.static(path.join(_dirname, "/Frontend/dist"))); // This is middleware : Serve all static files inside this folder automatically
// app.get((req ,res)=>{  // If user goes directly to frontend routes -> Server doesn’t know these routes (they are frontend routes) -> For any route not handled above → send index.html // Then React Router takes control.
//     res.sendFile(path.resolve(_dirname, "Frontend","dist","index.html"));  // This handles React Router routes.
// })


// start Listening
app.listen(process.env.PORT,()=>{
    console.log("server is listening on port " + process.env.PORT);
})