import express from 'express';
import longestWord from './Bootcamp functions/longestWord.js'
import shortestWord from './Bootcamp functions/shortestWord.js'
import wordLengths from './Bootcamp functions/wordLengths.js'
import enoughAirtime from './Bootcamp functions/enoughAirtime.js'
import totalPhoneBill from './Bootcamp functions/totalPhoneBill.js'


const app = express();

app.use(express.static('public'));

// Word Game

app.get('/api/word_game', function(req,res){

    const sentence = req.query.sentence;

    if (!sentence) {
        res.json({
            error : 'A sentence is required for analysis'
        })
    }

    res.json({
        "longestWord" : longestWord(sentence),
        "shortestWord" : shortestWord(sentence),
        "numOfLetters" : wordLengths(sentence)
    });
});

// Enough Airtime 

app.get('/api/enough', function(req, res) {
    const usage = req.query.usage;
    const availableAirtime = req.query.availableAirtime;


    if (!usage || !availableAirtime) {
        res.json({
            error: 'Please insert the available airtime and the usage'
        })
    }
    res.json ({
        "totalBill" : enoughAirtime(usage, availableAirtime)
    })
 });

app.post('/api/enough', function(req, res){
    const usage = req.body.usage;
    const availableAirtime = req.body.availableAirtime;
    const result = enoughAirtime(usage, availableAirtime);


        res.json({
            result : result
        });
});


    
// Total Phone Bill
    
app.get('/api/phonebill/prices', function(req, res) {
    const phoneBill = req.query.phoneBill;
   
    

   res.json ({ 
    "bill" : totalPhoneBill(phoneBill)
});
});


  
    app.post("/api/phonebill/total", function(req, res) {
        const bill = req.body.bill;
            
        res.json({
            message: "success",
            total : totalPhoneBill(bill)
        });
    });

    

    app.post('/api/phonebill/price', function(req, res) {
     const type = req.body.type;
     const price = req.body.price;

        res.json ({
            status: 'sucess',
        message: `The ${type} was set to ${price.toFixed(2)}`,
        });
    });
  
  

const PORT = 4018;
app.listen(PORT, function() {
    console.log('api started on port', PORT)
})