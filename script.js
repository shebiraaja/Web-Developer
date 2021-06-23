const notes_body = document.querySelector(".notes-body")
const button_div = document.querySelector(".button-div")
const btn_delete = document.querySelector(".delete-note")
const textarea = document.querySelector(".textarea")
const deleteit = document.querySelector(".button-div-del")
let unlist = document.querySelector(".unlist")
let LIST = [{
    notes : "undefined", 
    id : 0
}, {
    notes : "undefined2", 
    id : 1
},{
    notes : "undefined3", 
    id : 2
}]
let id = 1;

function addNotes(notes, id){
    let text = `<div class="notes-body">
    <ul class="unlist">
        <li>
            <p class="text1">Note${id}</p>
            <p class="text2">${notes}</p>

        </li>
        <div class="button-div-del">
            <button id="${id}" onclick="deleteNote(this.id)" class="delete-note">delete</button>
        </div>
    </ul>
</div>`
    
    let position = "beforebegin"

    notes_body.insertAdjacentHTML(position, text)
}

// deleteit.addEventListener("click", function(){
//     console.log("hola")
// })


button_div.addEventListener("click", function(event){
    const notes = textarea.value 
    LIST.push(textarea.value)
    console.log(LIST)
    if(notes){
        addNotes(notes, id)
        LIST.push({
            notes : notes,
            id : id
        })
        console.log(LIST.notes)
    }
    textarea.value = ""
    id++
})

console.log(LIST)



// function deleteNote(event){
//     let target = event
//     console.log(target)
//     delete LIST[target];
//     console.log(LIST[2])
//     console.log(LIST[2])
// }


// let search = document.getElementById("searchTxt")
// let inputValue = search.value

// const findNote = function(LIST, noteTitle){
//     const index = LIST.findIndex(function(note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return LIST[index]
// }

// const note = findNote(LIST, "paula")
// console.log(note)




const filters = {
    searchText : ""
}

const renderNotes = function(LIST, filters){
    const filteredNotes = LIST.filter(function(note){ 
        return note.notes.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector(".notes-body-2").innerHTML = ""
    
    filteredNotes.forEach(function(note){
        const noteEl = document.createElement("p")
        noteEl.textContent = note.notes
        document.querySelector(".notes-body-2").appendChild(noteEl)
    })
}

renderNotes(LIST, filters)

document.getElementById("searchTxt").addEventListener("input", function(e){
    filters.searchText = e.target.value
    renderNotes(LIST, filters)
})



