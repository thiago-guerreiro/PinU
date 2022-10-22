const events = require('./database/testdata.js');
module.exports ={
    index: function(request, response) {
            return response.render('index')
},
    evento: function(request, response){
        return response.render('evento')
    },
    events: function(request, response){
        return response.render('events', { events })
    },
    registroEvento: function(request, response){
        return response.render('registro-evento')
    }

}