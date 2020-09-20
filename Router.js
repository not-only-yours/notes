let getParams = function (url) {
    var params = {}
    var parser = document.createElement('a')
    url = url || window.location.href
    parser.href = url
    var query = parser.search.substring(1)
    var vars = query.split('&')
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=')
        params[pair[0]] = decodeURIComponent(pair[1])
    }
    return params
}


let parameters = getParams();
console.log(getParams());

if(parameters['id']){
    const id = parameters['id']
    //console.log(id.getType())
    let noteArray = JSON.parse(localStorage.getItem('noteData'));
    //console.log(noteArray)
    if(id === "newNote"){

    }
    if(noteArray){
        //console.log('sdgfsedf')
        displayNote(0);
    }
}
