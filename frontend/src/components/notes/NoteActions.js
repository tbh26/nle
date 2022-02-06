import NewNote from './NewNote';
import SelectedNote from './SelectedNote';

function NoteActions(props) {
    const { onNewNote, selectedNote } = props;
    let hasSelectedNote = false;
    if (
        selectedNote &&
        selectedNote.hasOwnProperty('title') &&
        selectedNote.hasOwnProperty('content')
    ) {
        hasSelectedNote = true;
    }
    return (
        <div className="m-8 p-4 border-2">
            {hasSelectedNote ? (
                <div>
                    <SelectedNote selectedNote={selectedNote} />
                    <hr />
                    <div> =-= </div>
                </div>
            ) : (
                <div>
                    <div className="m-2 p-2">
                        <b>no</b> selected note!
                    </div>
                    <hr />
                    <NewNote onNewNote={onNewNote} />
                </div>
            )}
        </div>
    );
}

export default NoteActions;
