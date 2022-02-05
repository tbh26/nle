import NotesList from './NotesList';
import NotesActions from './NotesActions';

function NotesSteward() {
    function newNote(obj) {
        console.info('new note, obj:', obj);
    }

    return (
        <div className="grid grid-cols-2 gap-4">
            <NotesList />
            <NotesActions onNewNote={newNote} />
        </div>
    );
}

export default NotesSteward;
