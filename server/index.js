import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import cors from 'cors'
import holdingsRouter from './routes/holdings.route.js';
import positionsRouter from './routes/positions.route.js';
import userRouter from './routes/user.route.js';
dotenv.config();
const app = express();
app.use(cors({
  origin:["https://zerodha-app1-huzt.vercel.app"],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials:true,

}));

const PORT =  3001;
const mongoUrl =  process.env.MONGO_URL;
//console.log(mongoUrl)
// Middleware to parse JSON
app.use(express.json());
app.use("/holdings" , holdingsRouter)
app.use("/positions" , positionsRouter)
app.use("/User" , userRouter)


app.get('/', (req, res) => {
  res.send('Hello, Zerodha UI!');
});

// Example POST route
app.post('/data', (req, res) => {
  const receivedData = req.body;
  res.send(`Received data: ${JSON.stringify(receivedData)}`);
});


mongoose.connect(process.env.MONGO_URL).then(()=>

  app.get("/" , (req,res)=>{
      res.send("Hello , Server Connected")
  }),


  app.listen(3001 , ()=>{
      console.log(`Data bese and server is running`)
  }),


)
.catch((e)=>
  console.log(e)
)



/*app.get("/addHoldings", async (req, res) => {

    // holdings
     const tempHoldings = [
      {
        name: "BHARTIARTL",
        qty: 2,
        avg: 538.05,
        price: 541.15,
        net: "+0.58%",
        day: "+2.99%",
      },
      {
        name: "HDFCBANK",
        qty: 2,
        avg: 1383.4,
        price: 1522.35,
        net: "+10.04%",
        day: "+0.11%",
      },
      {
        name: "HINDUNILVR",
        qty: 1,
        avg: 2335.85,
        price: 2417.4,
        net: "+3.49%",
        day: "+0.21%",
      },
      {
        name: "INFY",
        qty: 1,
        avg: 1350.5,
        price: 1555.45,
        net: "+15.18%",
        day: "-1.60%",
        isLoss: true,
      },
      {
        name: "ITC",
        qty: 5,
        avg: 202.0,
        price: 207.9,
        net: "+2.92%",
        day: "+0.80%",
      },
      {
        name: "KPITTECH",
        qty: 5,
        avg: 250.3,
        price: 266.45,
        net: "+6.45%",
        day: "+3.54%",
      },
      {
        name: "M&M",
        qty: 2,
        avg: 809.9,
        price: 779.8,
        net: "-3.72%",
        day: "-0.01%",
        isLoss: true,
      },
      {
        name: "RELIANCE",
        qty: 1,
        avg: 2193.7,
        price: 2112.4,
        net: "-3.71%",
        day: "+1.44%",
      },
      {
        name: "SBIN",
        qty: 4,
        avg: 324.35,
        price: 430.2,
        net: "+32.63%",
        day: "-0.34%",
        isLoss: true,
      },
      {
        name: "SGBMAY29",
        qty: 2,
        avg: 4727.0,
        price: 4719.0,
        net: "-0.17%",
        day: "+0.15%",
      },
      {
        name: "TATAPOWER",
        qty: 5,
        avg: 104.2,
        price: 124.15,
        net: "+19.15%",
        day: "-0.24%",
        isLoss: true,
      },
      {
        name: "TCS",
        qty: 1,
        avg: 3041.7,
        price: 3194.8,
        net: "+5.03%",
        day: "-0.25%",
        isLoss: true,
      },
      {
        name: "WIPRO",
        qty: 4,
        avg: 489.3,
        price: 577.75,
        net: "+18.08%",
        day: "+0.32%",
      },
    ];

      tempHoldings.forEach((item) => {
    let newHolding = new HoldingsModel({
     name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.day,
      day: item.day,
   });

    newHolding.save();
  });
  res.send("Done!");
})*/

/*app.get("/addPositions", async (req, res) => {
   // positions
    const tempPositions = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];

     tempPositions.forEach((item) => {
    let newPosition = new PositionsModel({
       product: item.product,
       name: item.name,
      qty: item.qty,
  avg: item.avg,
       price: item.price,
      net: item.net,
       day: item.day,
      isLoss: item.isLoss,
     });

    newPosition.save();
  });
  res.send("Done!");
})*/






