const express = require('express');
const router = express.Router();
const menuItem = require('../models/menuItem');

router.post('/', async (req, res) => {
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
});

router.get('/', async (req, res) => {
    try {
        const menuItemData = await menuItem.find();
        console.log('menuItemData fetched');
        res.status(200).json(menuItemData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'internal server error' });
    }
});

router.get('/:tasteType', async (req, res) => {
    try {
        const tasteType = req.params.tasteType;
        if (tasteType == 'salty' || tasteType == 'sweet' || tasteType == 'spicy') {
            const response = await menuItem.find({ taste: tasteType });
            console.log('tasteType fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ err: 'invalid taste type' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'internal server error' });
    }
});

router.put('/:id', async (req, res) => {
    try{
        const menuItemId = req.params.id;
        const updateMenuItemDate = req.body;
        const response = await menuItem.findByIdAndUpdate(menuItemId, updateMenuItemDate, {
            new: true,
            runValidators: true
        });
        if(!response){
            return res.status(404).json({error: 'person not found'});
        }else{
            console.log('menuItem data updated');
            res.status(200).json(response);
        }
    }catch(err){
         console.log(err);
         res.status(500).json({error: 'internal server error'});
    }
});

router.delete('/:id', async(req, res) => {
    try{
       const menuItemId = req.params.id;
       const response = await menuItem.findByIdAndDelete(menuItemId);
       if(!response){
        res.status(404).json({error: 'person not found'});
       }else{
        console.log('data deleted');
        res.status(200).json({message: 'menuItem deleted sucessfully'});
       }
    }catch(err){
        console.log(err);
        res.status(500).json({erroe: 'internal server error'});
        
    }
})

module.exports = router;