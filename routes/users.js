const express = require('express');

module.exports = db => {
    const router = express.Router();
    const userModel = db.model('users');

    router.get('/', async (req, res) => res.json(await userModel.findAll()));

    router.get('/:userId', async (req, res) => {
        res.json(await db.model('users').findOne({ where: { id: req.params.userId }}));
    });

    // User Login
    router.post('/login', async(req, res) =>{
        console.log("-----> Request body : ",req.body);
        email = req.body['email']
        password = req.body['password']

        targetUser = await userModel.findOne({
            where: {
              email: email,
              password : password
            }
        })
        if (!targetUser){
            res.send({'message':'Invalid email or password'})
        } else {
            var date = new Date();
            var current_stamp = date.getTime();
            userModel.update(
                {last_login: current_stamp},
                {
                    where: {id: targetUser.id}
                }
            )
            res.send(targetUser)
        }
    });

    // post to create a user
    router.post('/create',(req, res) =>{
        console.log("-----> Request body : ", req.body);
        userModel.create({
            'first_name': req.body['first_name'],
            'last_name': req.body['last_name'],
            'password' : req.body['password'],
            'phone' : req.body['phone'],
            'dob' : Date(req.body['dob']),
            'email' : req.body['email'],
            'admin' : false,
            'active' : true,
            'access_revoked' : false,
            'created_by': 0,
            'updated_by': 0
        }).then((result) => {
            res.send({'msg':'user successfully created'})
        });
    });

    // put to update a user
    router.post('/update',(req, res) =>{
        console.log("-----> Request body : ", req.body);
        var data = req.body;
        userModel.update(
            data,
            {where: {id: data['id']}}
        ).then((result) => {
            res.send({'msg':'user successfully created'})
        });
    });


    // delete to delete a user
    router.post('/delete', (req, res) => {
        console.log("-----> Request body : ", req.body);
        var data = req.body;
        userModel.destroy({
            where:{
                id: data['id']
            }
        }).then((result) => res.send({'msg': 'user succenssfully deleted'}))
    })

    return router;
};
