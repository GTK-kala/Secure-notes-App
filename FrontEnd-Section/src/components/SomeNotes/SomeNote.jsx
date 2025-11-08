import "./SomeNote.css";

const SomeNote = () => {

    const HandleFetchData = async () => {
       const url = "http://localhost:3001/api/notes/some";
       const id = user_id;
    }
  return (
    <div className="some-note">
      <h2>Some Note Title</h2>
      <p>This is the content of the note.</p>
    </div>
  )
}

export default SomeNote