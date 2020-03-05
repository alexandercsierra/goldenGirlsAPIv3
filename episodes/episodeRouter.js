const router = require('express').Router();
const Episodes = require('./episodeModel')

router.get('/', (req, res)=>{
    Episodes.getAll()
        .then(episodes=>res.status(200).json(episodes))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'error getting episodes'})
        })
})

router.post('/', (req, res)=>{
    Episodes.add(req.body)
        .then(episode=>res.status(201).json(episode))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'error adding episode'})
        })
})

router.put('/:id', (req, res)=>{
    Episodes.update(req.params.id, req.body)
        .then(episode=>res.status(200).json(episode))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'error changing episode'})
        })
})

router.delete('/:id', (req, res)=>{
    Episodes.remove(req.params.id)
        .then(episode=>res.status(200).json(episode))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'error deleting episode'})
        })
})

module.exports = router;