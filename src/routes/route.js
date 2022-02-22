const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})
// 1st
router.get('/movies',function(req,res){
    let mov = ["thor","avengers","ironman","spiderman","hulk"]
    res.send(mov)

})
// 2nd
router.get('/movies/:movieId',function(req,res)
{
    let mov = ["thor","avengers","ironman","spiderman","hulk"]
    let val = req.params.movieId;

    if(val>mov.length - 1)
    {   
        res.send("This Movie doesn't exist")
    }
    else{
        res.send(mov[val])
    }
})
//3

router.get('/Moviess',function(req,res){
let mov = [{id: 1,name: 'The Shining' },{id: 2,name:'Incendies'}, {id: 3,name:'Rang de Basanti'},{id: 4,name:'Finding Demo'}]
   
   res.send(mov)
})


//4
router.get('/Moviess/:MoviessId',function(req,res){
    let mov = [{id: 1,name: 'The Shining' },{id: 2,name:'Incendies'}, {id: 3,name:'Rang de Basanti'},{id: 4,name:'Finding Demo'}]
     let val = req.params.MoviessId
      let resp = false
     for(let i = 0; i<mov.length;i++)
     {    
         if(mov[i].id == val)
         { resp = true
            res.send(mov[i])
            break
         }
     }
     if(resp == false)
     {
         res.send('No Movie Exists with this id:')
     }
})

module.exports = router;
