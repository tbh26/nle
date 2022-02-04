import NewNote from './NewNote';

function NotesActions() {
    return (
        <div className="m-8 p-4 border-2 ">
            <div>
                <em>notes action..</em>
            </div>
            <hr />
            <NewNote />
            <hr />
            <div>
                <em>another</em> note action
            </div>
        </div>
    );
}

export default NotesActions;
