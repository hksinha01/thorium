const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.post('/test-post',function(req,res)
{
    res.send("hi")
})
router.post('/test-post2',function(req,res)
{
    res.send( {msg : "hi", status:true})
})
router.post('/test-post3',function(req,res)
{
    let id = req.body.user
     let pwd = req.body.password

     console.log(id,pwd)
    console.log(req.body)    

    res.send( { msg : "hi" , status: true})

})

router.post('/test-post4',function(req,res)
{   let arr = [12,"functionUp",21,"pk"]
let ele = req.body.element
    res.send( {msg : "hi", status:true})
})


//Questions:  Q1.
// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
 // Your route code will look like this
 router.get("/sol1", function (req, res) {
	//logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
	let arr= [1,2,3,5,6,7]
	   let missingNumber
       let sum = 0
	   ///LOGIC WILL GO HERE 
           const a0 = arr[0]
           const last = arr[arr.length-1]
           const sum1 = (((arr.length+1)/2)*(a0 + last))
           // by using the concept of Sum of an A.P.
           for(let i = 0;i<arr.length;i++)
           {
               sum+=arr[i]
           }
           missingNumber = sum1 - sum
           console.log(missingNumber)
           res.send( { data: missingNumber } );

          
});

//Q2. 
// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
 // Your route code will look like this
 router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
       let missingNumber
       let sum = 0

       ///LOGIC WILL GO HERE 
       const a0 = arr[0]
       const last = arr[arr.length-1]
       const sum1 = (((arr.length+1)/2)*(a0 + last))
       for(let i = 0;i<arr.length;i++)
       {
           sum+=arr[i]
       }
       missingNumber = sum1 - sum
       console.log(missingNumber)

    res.send( { data: missingNumber } );
});

let players =
[
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ],
        "bookings": [
            {
                "bookingNumber": 1,
                "sportId": "",
                "centerId": "",
                "type": "private",
                "slot": '16286598000000',
                "bookedOn": '31/08/2021',
                "bookedFor": '01/09/2021'
            },
            {
                "bookingNumber": 2,
                "sportId": "",
                "centerId": "",
                "type": "private",
                "slot": '16286518000000',
                "bookedOn": '31/08/2001',
                "bookedFor": '01/09/2001'
            },
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ],
        "bookings": []
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ],
        "bookings": []
    },
]

router.post("/players",function(req,res)
{  let count = true
    let element=req.body.name;
    for(let i = 0;i < players.length; i++)
    {     
        if(players[i].name === element)
        {        count = false
                break;
        }
    }
    if(count === true)
    {   let  obj = {}
        obj.names=req.body.name
        obj.dob=req.body.dob
        obj.gender=req.body.gender
        obj.city=req.body.city
        obj.sports=req.body.sports
        obj.bookings=req.body.bookings
        
        players.push(obj)
        res.send(players)
        console.log("Players is updated")
    }
     else
     {   
         res.send("user name already exist:")
         console.log("user name already exist:")
     }
})

module.exports = router;


