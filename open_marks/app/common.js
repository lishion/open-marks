
module.exports.log = console.log
const $ = require('jquery')
module.exports.post = (url,data,success)=>{
    $.ajax({
        "url":"http://127.0.0.1:5000/create",
        "type":"POST",
        "data":JSON.stringify(data),
        "success":success,
        "contentType":"application/json"
     })
}
