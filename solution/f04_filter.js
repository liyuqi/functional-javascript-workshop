function  getShortMessages(messages){
    return messages.filter(function lt50(messages){
        return null || messages.message.toString().length<50
    }).map(function(messages){ return messages.message;})
    
    // solution
    /*
    return messages.filter(function(item) {
        return item.message.length < 50
      }).map(function(item) {
        return item.message
      })
    */
}

module.exports = getShortMessages;