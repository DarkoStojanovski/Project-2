const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');
const db = require("../../models")


// gets all the members
router.get('/',(req, res) => {
    // res.json(members)
    db.Member.findAll().then((members)=> {
        res.json(members);
    });
});

//get a single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No member with id of ${req.params.id}`});
    }

    
});

//Create a member
router.post('/', (req, res) => {
    console.log(req.body);
    const newMember = {
        // id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }
    if (!newMember.name || !newMember.email){
        res.status(400).json({ msg: 'Please include a name and email'});
    }

    db.Member.create(newMember).then((memberData) => {
        res.redirect('/');
    });
    // members.push(newMember);
    // res.json(members);
    //res.redirect('/');

});
//Update member
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        const updMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;

                res.json({ msg: 'Member updated', member});
            }
        })
    } else {
        res.status(400).json({ msg: `No member with id of ${req.params.id}`});
    }

    
});

//delete member
// router.delete('/:id', (req, res) => {
//     const found = members.some(member => member.id === parseInt(req.params.id));
//     if(found){
//         res.json({ 
//             msg: 'member deleted', 
//             members: members.filter(member => member.id !== parseInt(req.params.id))
//     });
//     } else {
//         res.status(400).json({ msg: `No member with id of ${req.params.id}`});
//     }

    
// });
router.delete("/:id",(req, res) => {
    console.log(req.body);
    
    db.Member.destroy({where: req.params.id}).then( newJoke => {
        console.log(newJoke);
        res.status(200);   
    });
});




module.exports = router;