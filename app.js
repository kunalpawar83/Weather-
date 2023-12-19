const express = require('express');
const https = require('https');
const bodyparser = require('body-parser');
const app = express();


app.use(bodyparser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
   res.sendFile(__dirname+'/index.html');
})

app.post('/post',(req,res)=>{
     console.log("the request ")
     const  query= req.body.citynames
       const apikey = '170a4daaf6f067d589fce84c724855b0'
         const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ query+'&appid=' + apikey+'&units=metric'
        https.get(url,(response)=>{
          response.on('data',(data)=>{
          const weatherdata = JSON.parse(data);
          const temp = (weatherdata.main.temp).toFixed(1);
          const dis = weatherdata.weather[0].description;
        res.send("the temperature in kukshi is "+temp+" C");
        
                    })   
              })
})





app.listen(4500,()=>{
      console.log("this is my port number is 4500")
})
