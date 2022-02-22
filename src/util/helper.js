
function printDate(date)
{  console.log("==============================================================")
    var today = new Date()
    let dd = today.getDate()
    console.log("Date is:",dd)
   
}
function printMonth(month)
{
    var month = new Date()
    let dd = month.getMonth()
    console.log("Month is:",dd+1)
   
}
function getBatchInfo(message)
    {
       console.log(message)
    }
    module.exports.Date = printDate
    module.exports.Month = printMonth
    module.exports.info = getBatchInfo