import React, { useState, useEffect } from 'react';
import './App.css';
import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module
import { ToggleTheme } from "./toggleThemeButton"
//import { LuvBut } from "./luvButton"

export const StickyNotes = () => {
//creates the list of notes on the web page with dummyNotesList default
 const [notes, setNotes] = useState(dummyNotesList); 

 //initial state of the note to be referenced by following useState
 const initialNote = {
    id: -1,
    title: "",
    content: "",
    label: Label.other,
    hearted: false,
  };
 
 const [createNote, setCreateNote] = useState(initialNote);
 
 const createNoteHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("title: ", createNote.title);
    console.log("content: ", createNote.content);
    console.log("id: ", createNote.id);
    console.log("label: ", createNote.label);
    createNote.id = notes.length + 1;
    setNotes([createNote, ...notes]);
    setCreateNote(initialNote);
  };
 // useEffect to change the state
  useEffect(() => {
   console.log(notes);
  }, [notes]);
 
  //delete notes when 'x' button is pressed
  const deleteNoteHandler = (prop: string) => {
   const filter: Note[] = notes.filter((note) => note.title !== prop);
  // console.log(filter);
   /*useEffect(() => {
     setNotes(filter);
    }, [notes]);*/
    setNotes(filter);
    console.log(notes);
  }
 
  let noteTitles: string[] = [];
  const[hearts, setHearts] = useState(noteTitles)
 
   //favorite list
  const favoriteHandler = (note: Note) => {
  createNote.title = note.title;
  createNote.content = note.content;
  createNote.id = note.id;
  createNote.label = note.label;
  createNote.hearted = note.hearted ? false : true
   console.log(createNote);
   if(createNote.hearted){
     setHearts([...hearts, note.title]);
   }
   else{
     const filter: string[] = hearts.filter((x) => x !== note.title);
     setHearts(filter);
   }
 //delete prev note
   deleteNoteHandler(note.title);
 //set new Mote with updated hearted
   setNotes([createNote, ...notes]);
  }
 
  
  
  return (
     <div className='app-container'>
       <form className="note-form" onSubmit={createNoteHandler}>
         <div>
           <input
             placeholder="Note Title"
             onChange={(event) =>
               setCreateNote({ ...createNote, title: event.target.value })}
             required>
           </input>
         </div>
 
         <div>
           <textarea placeholder="Note Content"
             onChange={(event) =>
               setCreateNote({ ...createNote, content: event.target.value })}
             required>
           </textarea>
         </div>
 
   <div>
          <select
            onChange={(event) =>
           setCreateNote({ ...createNote, label: event.target.value as Label })}
         required>
            <option value={Label.personal}>Personal</option>
            <option value={Label.study}>Study</option>
            <option value={Label.work}>Work</option>
            <option value={Label.other}>Other</option>
          </select>
        </div>
 
         <div><button type="submit">Create Note</button></div>
 
       <div id="favorites">
         <h2>Favorites</h2>
         <ul>
          {hearts.map((note) => (
             <li>{note}</li>
           ))} 
         </ul>
       </div>
       </form>
 
       <div className="notes-grid">
         {notes.map((note) => (
           <div
             key={note.id}
             className="note-item"
 >
             <div className="notes-header">
           <button onClick={ () => favoriteHandler(note)}>
             {note.hearted ? "❤️️" : "♡" }
           </button>
           
           <button data-testid={"test" + note.id} onClick={() => deleteNoteHandler(note.title)}>x</button>
             </div>
             <h2 contentEditable="true"> {note.title} </h2>
             <p contentEditable="true"> {note.content} </p>
             <p contentEditable="true"> {note.label} </p>          
           </div>
         ))}
       </div>
     <ToggleTheme/>
     </div>  );
    }