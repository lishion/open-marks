var log = console.log
var bookmarks = chrome.bookmarks

function log_detail(id,data){
    
 
    log(JSON.stringify({"id":id,"data":data}))
}

bookmarks.onChanged.addListener(log_detail)  

bookmarks.onCreated.addListener(log_detail)

bookmarks.onMoved.addListener(log_detail)

bookmarks.onRemoved.addListener(log_detail)
