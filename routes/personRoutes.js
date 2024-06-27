const express = require('express');
const router = express.Router();
const person = require('../models/person');

router.post('/', async (req, res) => {
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

router.get('/', async (req, res) => { // get a method to get person
    try {
        const data = await person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
});

router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await person.find({ work: workType });
            console.log('workData fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ err: 'invalid work type' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'internal server error' });
    }
});

router.put('/:id', async (req, res) => {
    try{
       const personId = req.params.id; //extract the id from the url parameter
       const updatePersonData = req.body;  //update data for the person
       const response = await person.findByIdAndUpdate(personId,updatePersonData, {
        new: true,  //return the updated document
        runValidators: true  //runs mongoose validator
       })
        if(!response){
            return res.status(404).json({error: 'person not found'});
        }else{
            console.log('person data updated');
            res.status(200).json(response);
        }     

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }
})

router.delete('/:id', async(req, res) => {
    try{
       const personId = req.params.id;
       const response = await person.findByIdAndDelete(personId);
       if(!response){
        res.status(404).json({error: 'person not found'});
       }else{
        console.log('data deleted');
        res.status(200).json({message: 'person deleted sucessfully'});
       }
    }catch(err){
        console.log(err);
        res.status(500).json({erroe: 'internal server error'});
        
    }
})

module.exports = router;
