require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const pc = require('./products_controller');
const port = process.env.PORT;
const connectionString = process.env.CONNECTION_STRING;
//const path = require('path');
const stripe = require('stripe')(process.env.SECRET_KEY);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../build`));

massive(connectionString)
    .then(db => {
        app.set('db', db);
        app.listen(port, () => { console.log(`Getting work done on port: ${port}.`) })
    });

//ENDPOINTS 
app.get('/items/:gender/:category', pc.getCategoryByGender)
app.get('/item/product/:product_id', pc.getProductById)

app.post('/api/payment', function (req, res, next) {
    //convert amount to pennies
    console.log("Begining payment");
    const amountArray = req.body.amount.toString().split('');
    const pennies = [];
    for (var i = 0; i < amountArray.length; i++) {
        if (amountArray[i] === ".") {
            if (typeof amountArray[i + 1] === "string") {
                 pennies.push(amountArray[i + 1]);
            } else {
                 pennies.push("0");
            }
            if (typeof amountArray[i + 2] === "string") {
                pennies.push(amountArray[i + 2]);
            } else {
                pennies.push("0");
            }
            break;
         } else {
            pennies.push(amountArray[i])
        }
    }

    const convertedAmt = parseInt(pennies.join(''));
    console.log("amt", convertedAmt);
    const charge = stripe.charges.create({
        amount: convertedAmt, // amount in cents, again
         currency: 'usd',
         source: req.body.token.id,
         description: 'Test charge from react app'
     }, function (err, charge) {
         if (err) {
             console.error(err);
             return res.sendStatus(500)
         }
         return res.sendStatus(200);
     });
});

module.exports = app;