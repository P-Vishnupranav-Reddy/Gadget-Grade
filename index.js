const port = 5000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Connection
mongoose.connect("mongodb://localhost:27017/weather_station").then(() => console.log("MongoDB Connected")).catch(err => console.log("Mongo Error, err"));

app.get("/", (req,res) => {
    res.send("Express is running")
})

// Weather Schema
const weatherSchema = new mongoose.Schema({
    temperature: { type: Number, required: true },
    feels_like: { type: Number, required: true },
    humidity: { type: Number, required: true },
    rain_detected: { type: Boolean, required: true },
    rain_intensity: { type: Number, required: true },
    air_quality: {
        value: { type: Number, required: true },
        status: { type: String, required: true },
    },
    timestamp: { type: Date, required: true },
});

// Weather Model
const weather = mongoose.model("reading", weatherSchema);

// Weather API
app.get('/get/weather', async (req, res) => {
    try {
        let weatherData = await weather.find({});
        console.log("Weather data fetched");
        res.send(weatherData);
    } catch (err) {
        console.error("Error fetching weather data:", err);
        res.status(500).send("Server Error");
    }
});

app.listen(port, (error) => {
    if(!error){
        console.log("Server is running at port " + port);
    }else{
        console.log("Error: " + error);
    }
})