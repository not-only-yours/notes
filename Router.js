window.onload = () => {
    if(location.hash){
        if(location.hash.slice(1) === 'newNote'){
            writeNote();
        }else{
        let noteArray = JSON.parse(localStorage.getItem('noteData'));
        for(let i=0;i<noteArray.length;i++) {
            console.log(noteArray[i].date + ' '+ location.hash.slice(1));
            if (noteArray[i].date.toString() === location.hash.slice(1).toString()) {
                console.log('ewrgwrgegwer');
                let noteArray = JSON.parse(localStorage.getItem('noteData'));
                init();
                document.getElementById('read').style.display = "none";
                document.getElementById('write').style.display = "block";
                document.getElementById('btnSave').style.display = "none";
                //todo change func of button;
                document.getElementById('noteTitle').value = noteArray[i].title;
                document.getElementById('noteBody').value = noteArray[i].body;
            }
        }
        }
    }
}

window.onhashchange = () => {
    if(location.hash){
        if(location.hash.slice(1) === 'newNote'){
            writeNote();
        }else{
            let noteArray = JSON.parse(localStorage.getItem('noteData'));
            for(let i=0;i<noteArray.length;i++) {
                console.log(noteArray[i].date + ' '+ location.hash.slice(1));
                if (noteArray[i].date.toString() === location.hash.slice(1).toString()) {
                    console.log('ewrgwrgegwer');
                    let noteArray = JSON.parse(localStorage.getItem('noteData'));
                    init();
                    document.getElementById('read').style.display = "none";
                    document.getElementById('write').style.display = "block";
                    document.getElementById('btnSave').style.display = "none";
                    //todo change func of button;
                    document.getElementById('noteTitle').value = noteArray[i].title;
                    document.getElementById('noteBody').value = noteArray[i].body;
                }
            }
        }
    }
}