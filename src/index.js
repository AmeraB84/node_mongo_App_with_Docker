const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');
//Init server 
const PORT = 4000;
const app = express();
const REDIS_HOST ='redis';
const REDIS_PORT = 6379;
const redisClient = redis.createClient({
    url: `redis://${REDIS_HOST}:${REDIS_PORT}`
  });

//Connexion to redis 
redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.on('connect',()=> console.log('connected to redis ....'));
redisClient.connect();

//Connexion to DB
const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017;
const DB_HOST = 'mongo';
const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`
mongoose.connect(URI).then(()=>console.log('connected to db...')).catch((err)=>console.log('failed to connect ti db ',err));

//Create a route

app.get('/',(req,res)=>res.send('<h1>Hello from aws_docker_nodejs_app by Amera BOUDIA !!</h1>'));
//set this value in memory cache 
redisClient.set('products', 'products...');

//Create a route
app.get('/data', async (req,res)=>{
    const products = await redisClient.get('products');
    res.send(`<h1>Hello from aws_docker_nodejs_app by Amera BOUDIA</h1> <h2>${products}</h2>`);
});

app.listen(PORT, ()=>console.log(`App is runnnig on port : ${PORT}`));