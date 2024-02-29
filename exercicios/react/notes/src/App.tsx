import { ChangeEvent, useState } from "react";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

interface Note {
  id: string
  date: Date,
  content: string
  
}

export function App() {

  const [search, setSearch] = useState('')
  
  const [notes, setNotes] = useState<Note[]>(() => {
    const onNotesStorage = localStorage.getItem('notes')

    if(onNotesStorage){
      return  JSON.parse(onNotesStorage)
    }

    return []
  })

  function onNoteCreated(content: string) {
    const newNote={
      id: crypto.randomUUID(),
      date: new Date(),
      content
    }

    const notesArray = [newNote, ...notes]
    
    setNotes(notesArray)

    localStorage.setItem('notes', JSON.stringify(notesArray))
  }

  function onNoteDeleted(id: string){
    const notesArray =  notes.filter(note => {
      return note.id !== id
    })

    setNotes(notesArray)

    localStorage.setItem('notes',JSON.stringify(notesArray))
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>){
    const query = event.target.value

    setSearch(query)
  }

  // estudar
  const filteredNotes = search !== ''
    ? notes.filter(note => note.content.toLocaleLowerCase( ).includes(search.toLocaleLowerCase()))
    : notes

  return (
    <div className="container px-6 mx-auto max-w-6xl my-12 space-y-6">

      <input 
        className="max-sm:text-xl w-11/12 bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500" 
        type="text" placeholder="Busque em suas notas..." onChange={handleSearch}
      />

      <hr className="border-slate-700"/>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={onNoteCreated}/>

        {filteredNotes.map(note => {
          return <NoteCard key={note.id} note={note} onNoteDeleted={onNoteDeleted}/>
        })}
      </div>
    </div>
  )
}