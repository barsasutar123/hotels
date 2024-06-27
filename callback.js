1./*function mul(x, y){
    return x*y;
}

let result = mul(4, 7);
console.log(result);*/

2./*var add = function(a, b){
    return a+b;
}

var result = add(2, 8);
console.log(result);*/

3./*var add = (a, b)=> {
    return a+b;
}
 var result = add(4, 4567);
 console.log(result);*/

4./* var add = (a, b) => a+b;
 let result = add(234,789);
 console.log(result);*/

5.//callback function
/*function callback(){
    console.log('barsa is callijg a callback function');
}

const add = function(a, b, callback){
    var result = a+b;
    console.log('result:',result);
    callback();
}

add(234, 576, callback);*/

6./*function callback(){
    console.log('function calling is sucessful');
}

const add = (a, b)=>{
    result = a+b;
    console.log('result:',result);
    callback();
} 

add(234, 346, callback);*/

//=>....7

/*const add = (a, b, callback)=>{
    const result= a+b;
    console.log('result:',result);
    callback();
} */

/*add(2124, 1235, ()=>console.log('adding is completed'));*/  //or
 /*add(2355, 56487, function(){
     console.log('adding is sucessful');
 })*/


  8. /*  var fs = require('fs');
     var os = require('os');
     
     var user = os.userInfo();
     console.log(user);
     console.log(user.username);
     
     fs.appendFile('greeting.txt','hello ' + user.username + '!\n', ()=>{console.log('new file created')}); */
     
//server.js====>     
9./* const notes = require('./notes.js');
const _ = require('lodash');
const age = notes.age;
console.log('age is:',age);
const result = notes.addNumber(age+18, 45);
console.log('result is:',result);

var information = ["name","name","person",1,1,2,2,'age','2'];
var filter = _.uniq(information);
console.log(filter);
console.log(_.isNumber('mamuni')); */
//notes.js====>
/* console.log('this is very easy');
const age = 25;
const addNumber = (a, b)=>{
    return a+b;
}

module.exports = {
    age,
    addNumber
} */


   10. /*function Person(userName, age, email) {
             this.userName = userName;
             this.age = age;   
             this.email = email;
         }
        const Person1 = new Person("Barsa", 25, "Barsa@gmail.com");
         const Person2 = new Person("Prem", 25, "Barsa@gmail.com");
         console.log(Person1);
        
        const JsUser = {
            name: "Barsa",
            age: 18,
            location: "BBSR",
            email: 'Barsa@gmail.com',
        
            greeting: function() {
                console.log("Hello JS User");
            },
        
            greetingTwo: function() {
                console.log(`Hello JS User ${this.name}`);
            }
        };
        
        JsUser.greeting();        
        JsUser.greetingTwo();  */  

        /*  ///convert object to string==>  const objectConvert = {
            name: "barsa",
            age: 34,
            city: "bbsr"
        }
        
        const convertString = JSON.stringify(objectConvert);
        console.log(convertString); */

//==>11.
/*app.get('/', (req, res)=>{
    res.send('welcome to my hotel')
})

app.post('/person',(req, res)=>
{
    res.send('data is saved');
}) */

    
//===> server.js
/*const express = require('express');
const app = express();
const db = require('./db');
const person = require('./models/person');
const menuItem = require('./models/menuItem');
app.use (express.json ());

app.post('/person', async (req, res) =>{
    try{
      const personData = req.body //assuming the request body contains the person data
      //create a new person document using the mongoose model
      const newPerson = new person(personData);

      //save the new person to the database
      const response = await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);
    }catch(err){
       console.log(err);
       res.status(500).json({error: 'internal server error'});
    }
})

app.get('/person', async (req, res) => { //get a method to get person
    try{
       const data = await person.find();
       console.log('data fetched');
       res.status(200).json(data);
    }catch(err){
       console.log(err);
       res.status(500).json({error: 'internal server error'});
    }
})

app.post('/menuItem', async (req, res) => {
    try {
        const menuItemData = req.body; // assuming menuItemData contains menuitem data
        const itemList = new menuItem(menuItemData); // Use the correct model name
        const response = await itemList.save();
        console.log('menuitem saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
})

app.get('/menuItem', async (req, res) => {
    try{
        const menuItemData = await menuItem.find();
        console.log('menuItemData fetched');
        res.status(200).json(menuItemData);
    }catch(err){
        console.log(err);
        res.status(500).json({err: 'internal server error'})
    }
})


app.listen(3000, ()=>{
    console.log('server is listening on port 3000');
}) */


//parameterized call function giving example of worktype of a person in our hotel
//server.js====>
/* const express = require('express');
const app = express();
const db = require('./db');
const person = require('./models/person');
const menuItem = require('./models/menuItem');
app.use (express.json ());

app.post('/person', async (req, res) => {
    try {
        const personData = req.body; // assuming the request body contains the person data
        // create a new person document using the mongoose model
        const newPerson = new person(personData);

        // save the new person to the database
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
});

app.get('/person', async (req, res) => { //get a method to get person
    try{
       const data = await person.find();
       console.log('data fetched');
       res.status(200).json(data);
    }catch(err){
       console.log(err);
       res.status(500).json({error: 'internal server error'});
    }
})

app.post('/menuItem', async (req, res) => {
    try {
        const menuItemData = req.body; // assuming menuItemData contains menuitem data
        const itemList = new menuItem(menuItemData); // Use the correct model name
        const response = await itemList.save();
        console.log('menuitem saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
})

app.get('/menuItem', async (req, res) => {
    try{
        const menuItemData = await menuItem.find();
        console.log('menuItemData fetched');
        res.status(200).json(menuItemData);
    }catch(err){
        console.log(err);
        res.status(500).json({err: 'internal server error'})
    }
})

app.get('/person/:workType', async (req, res) => {
    try{
       const workType = req.params.workType;
       if(workType == 'chef' || workType == 'manager'|| workType == 'waiter'){
        const response = await person.find({work: workType});
        console.log('workData fetched');
        res.status(200).json(response);
       }else{
         res.status(404).json({err: 'invalid work type'});
       }

    }catch(err){
       console.log(err);
       res.status(500).json({err: 'internal server error'});
    }
})

app.listen(3000, ()=>{
    console.log('server is listening on port 3000');
}) */


        
        