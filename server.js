const express = require('express')

const app = express() 
const PORT = 3000
 const flowers = [
     {
         "name":"begonia",
         "needs":"well-drained-soil",
         "zones": 8-10,
         "height": "0.5-1.5 feet",
         "color":"pink"         
     },
     {
        "name":"zinna",
        "needs":"well-drained-soil",
        "zones": 2-11,
        "height": "0.5-2.5 feet",
        "color":"yellow"         
    },

     {
         "name":"unknown",
         "needs":"unknown",
         "zones": 0,
         "height": "0",
         "color":"unknown"         
     }


    ]

 app.get('/',(request,response)=>{
    response.sendFile(__dirname +'/index.html') 
 })
 app.get('/api/:name',(request,response)=>{
     const flowerNmae = request.params.name.toLowerCase()
     if(flowerName[flowers]){
         response.json(flowers[flowerNmae])
     }else{
         response.json(flowers['unknown'])
     }
 })
 app.listen(process.env.PORT||PORT,()=>{
     console.log(`The server is running on ${PORT} PORT`)
 })