import React, {useState} from "react";

function CreateArea(props) {

  const[note, setNote] = useState({
    title: "",
    content: ""
  })

  const changeHandle = (event) => {
    const {name, value} = event.target;
    setNote(prevValue=>  ({...prevValue, [name]: value}))
  }

  const addHandle = (event) => {
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: ""
    });
  }


  return (
    <div>
      <form>
        <input onChange={changeHandle} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={changeHandle} value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={addHandle}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
