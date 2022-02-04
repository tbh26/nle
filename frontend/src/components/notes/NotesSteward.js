import NotesList from './NotesList';
import NotesActions from './NotesActions';

function NotesSteward() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <NotesList />
            <NotesActions />
        </div>
    );
}

export default NotesSteward;
