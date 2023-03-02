import React from "react";

function Note(props) {

    const deleteHandle = () => {
        props.onDelete(props.id);
    }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteHandle}>DELETE</button>
    </div>
  );
}

export default Note;
