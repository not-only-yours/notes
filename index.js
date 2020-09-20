
function Note(date, title, body){
    this.date = date;
    this.title = title;
    this.body = body;
}

const btnSave = document.getElementById('btnSave');
let notes ="";


init();

function init() {
    let out = "";
    let noteArray = JSON.parse(localStorage.getItem('noteData'));
    if (noteArray != null && noteArray != "") {
        noteArray = JSON.parse(localStorage.getItem('noteData'));
        for (let a = 0; a < noteArray.length; a++) {
            out += "<option value=" + a + ">";
            out += noteArray[a].title;
            out += "</option>";

            document.getElementById('noteMaster').innerHTML = out;
        }
        document.getElementById('btnWrite').addEventListener('click', function (e) {
            writeNote();
        });

        document.getElementById('noteMaster').addEventListener('click', function (e) {
            displayNote(e.target.value);
        });
        readNotes();
    } else {
        writeNote();
    }
}

    function writeNote(){
        document.getElementById('read').style.display = "none";
        document.getElementById('write').style.display = "block";
        document.getElementById('noteTitle').value = "";
        document.getElementById('noteBody').value = "";
        document.getElementById('btnSaveTwo').style.display = "none";
    }

    function readNotes(){
        document.getElementById('read').style.display ="block";
        document.getElementById('write').style.display = "none";
    }

    function getFormattedDate(date) {
        let year = date.getFullYear()

        let month = (1 + date.getMonth()).toString()
        month = month.length > 1 ? month : '0' + month

        let day = date.getDate().toString()
        day = day.length > 1 ? day : '0' + day

        let hour = date.getHours().toString()
        hour = hour.length > 1 ? hour : '0' + hour

        let minutes = date.getMinutes().toString()
        minutes = minutes.length > 1 ? minutes : '0' + minutes

        let seconds = date.getSeconds().toString()
        seconds = seconds.length > 1 ? seconds : '0' + seconds

        return day + '.' + month + '.' + year + ' ' + hour + ':' + minutes + ':' + seconds
    }


    function displayNote(note) {
        let noteArray = JSON.parse(localStorage.getItem('noteData'));
        let out = "<h2>" + noteArray[note].title + "</h2>";

        out += "<h4>Date: " + getFormattedDate(new Date(noteArray[note].date)) + "</h4>";
        out += "<p>" + noteArray[note].body + "</p>";
        out += "<button class='btn btn-primary' id ='btnDelete'>Delete</button>"
        out +="<button class='btn btn-primary' id = 'btnEdit'>Edit Note</button>"
        document.getElementById('noteDisplay').innerHTML = out;
        document.getElementById('btnDelete').onclick = function () {
            noteArray.splice()
            noteArray.splice(note, 1);
            localStorage.setItem('noteData', JSON.stringify(noteArray));
            init();
        }
        document.getElementById('btnEdit').onclick = function (){
            let noteArray = JSON.parse(localStorage.getItem('noteData'));
            init();
            document.getElementById('read').style.display = "none";
            document.getElementById('write').style.display = "block";
            document.getElementById('btnSave').style.display = "none";
            //todo change func of button;
            document.getElementById('noteTitle').value = noteArray[note].title;
            document.getElementById('noteBody').value = noteArray[note].body;


        }
    }


btnSaveTwo.onclick = function (){
    let noteArray = JSON.parse(localStorage.getItem('noteData'));
    for (let a=0;a<noteArray.length;a++){
        //console.log(noteArray[i].title);
        //console.log(document.getElementById('noteTitle').value);
        if(noteArray[a].title === document.getElementById('noteTitle').value) {
            noteArray.splice(a, 1);
            localStorage.setItem('noteData', JSON.stringify(noteArray));
        }
    }
    const noteDate = new Date();
    let noteTitle = document.getElementById('noteTitle').value;
    if(document.getElementById('noteTitle').value.length === 0){
        noteTitle = "EmptyName";
    }
    const noteBody = document.getElementById('noteBody').value;
    const theNote = new Note(noteDate,noteTitle,noteBody);
    saveNotes(theNote);
}


        btnSave.onclick = function (){
            const noteDate = new Date();
            console.log(noteDate);
            let noteTitle = document.getElementById('noteTitle').value;
            if(document.getElementById('noteTitle').value.length === 0){
                noteTitle = "EmptyName";
            }
            const noteBody = document.getElementById('noteBody').value;
            const theNote = new Note(noteDate,noteTitle,noteBody);
            saveNotes(theNote);
    }

        function saveNotes(note){
            let noteArray = JSON.parse(localStorage.getItem('noteData'));
            if(noteArray == null){
                noteArray = new Array();
                noteArray.push(note);
            } else {
                noteArray.push(note);
            }
            localStorage.setItem('noteData',JSON.stringify(noteArray));
            readNotes();
            init();
        }
