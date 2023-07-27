const express = require('express');
const app= express();
const router=express.Router();
const cors= require('cors');
const nodemailer= require('nodemailer');



// server used to send emails
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, ()=>{
    console.log("server started")
});

const contactEmail=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"",
        pass:""
    }
});

contactEmail.verify((error)=>{
if(error){
    console.log(error);
}
else{
    console.log("ready to send");
}
})

router.post('/contact',(req, res)=>{
    const name=req.body.firstName + req.body.lastName;
    const email= req.body.email;
    const message= req.body.message;
    const phone=req.body.phone;
    const mail={
        from:name,
        to:"srivastava.u002@gmail.com",
        subject:"contact form submission-portfolio",
        html:` <P>Name:${name}</p>
        <P>Email:${email}</p>
        <P>Phone:${phone}</p>
        <P>Message:${message}</p> `
    };

    contactEmail.sendMail(mail,(error)=>{
         if(error){
            res.json(error);
         }
         else{
            res.json({code:200,status:"message send"})
         }
    })
})
