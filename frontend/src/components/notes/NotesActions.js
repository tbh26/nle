import NewNote from './NewNote';

function NotesActions(props) {
    return (
        <div className="m-8 p-4 border-2 ">
            <div>
                <em>notes action..</em>
            </div>
            <hr />
            <NewNote onNewNote={props.onNewNote} />
            <hr />
            <div>
                <em>another</em> note action
            </div>
        </div>
    );
}

export default NotesActions;
