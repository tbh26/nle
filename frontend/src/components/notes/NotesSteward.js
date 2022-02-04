import NotesList from './NotesList';
import NotesActions from './NotesActions';

function NotesSteward() {
    return (
        <div className="flex justify-evenly">
            <NotesList />
            <NotesActions />
        </div>
    );
}

export default NotesSteward;
