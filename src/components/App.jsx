import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

const [notes, setNotes] = useState([]);

function addNote(note){
  console.log(note);
  setNotes(prevValue => {
    return [...prevValue, note];
  });
  console.log(notes);
}

function deleteNote(id){
  console.log(id);
  setNotes(prev =>{
    return prev.filter((note, index)=> index!== id);
  });
  console.log(notes);
}

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes?.map((note, index) => {
      return (
          <Note 
          key={index}
          id={index}
          title={note.title} 
          content={note.content} 
          onDelete={deleteNote}
          />
      );
    })}
      <Footer />
    </div>
  );
}

export default App;
