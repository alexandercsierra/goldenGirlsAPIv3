const router = require('express').Router();
const Quotes = require('./quotesModel');

router.get('/', (req, res)=>{
    Quotes.getAll()
        .then(quotes=>res.status(200).json(quotes))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'error getting quotes'})
        })
})

router.get('/:who', (req, res)=>{
    Quotes.getByWho(req.params.who)
        .then(quotes=>res.status(200).json(quotes))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'error getting quotes'})
        })
})

router.get('/id/:id', (req, res)=>{
    Quotes.getById(req.params.id)
        .then(quote=>res.status(200).json(quote))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'error getting quote'})
        })
})

router.get('/random/:who', (req, res)=>{
    Quotes.getAllRandom(req.params.who)
        .then(quotes=>{
            if(quotes.length > 1){
                let quote = quotes[Math.floor(Math.random() * (quotes.length-1))]
                res.status(200).json(quote);
            } else {
                res.status(200).json(quote)
            }
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'error getting quotes'})
        })
})

router.post('/', (req, res)=>{
    Quotes.add(req.body)
        .then(quote=>res.status(201).json(quote))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'error adding quote'})
        })
})

router.put('/:id', (req, res)=>{
    Quotes.update(req.params.id, req.body)
        .then(quote=>res.status(200).json(quote))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'error changing quote'})
        })
})

router.delete('/:id', (req, res)=>{
    Quotes.remove(req.params.id)
        .then(quote=>res.status(200).json(quote))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'error deleting quote'})
        })
})

module.exports = router;