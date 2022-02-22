function trim(message)
{console.log("==============================================================")
   const a = message.trim()
   console.log("After Trim :",a)
}

function changetoLowerCase(message)
{
   const b = message.toLowerCase()
   console.log("In Lower Case :",b)
}
function  changetoUpperCase(message)
{
   const c = message.toUpperCase()
   console.log("In Upper Case",c)
   console.log("==============================================================")
}

module.exports.trim = trim
module.exports.lower = changetoLowerCase
module.exports.upper = changetoUpperCase

