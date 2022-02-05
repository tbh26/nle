import NewNote from './NewNote';

function NotesActions(props) {
    return (
        <div className="m-8 p-4 border-2">
            <div>
                <span className="font-semibold">new note action</span> &nbsp; (other{' '}
                <em>notes action(s)</em> follow? )
            </div>
            <hr />
            <NewNote onNewNote={props.onNewNote} />
            <hr />
        </div>
    );
}

export default NotesActions;
