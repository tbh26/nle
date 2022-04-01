import NewNote from './NewNote';
import SelectedNote from './SelectedNote';
import { isNote } from './Note';
import NoteForm from './NoteForm';

function NoteActions(props) {
    const { onNewNote, selectedNote, updateSelected, deleteSelected } = props;
    let hasSelectedNote = isNote(selectedNote);
    return (
        <div className="m-8">
            {hasSelectedNote ? (
                <div>
                    <div className="m-2 p-4 border-2">
                        <SelectedNote
                            selectedNote={selectedNote}
                            updateSelected={updateSelected}
                            deleteSelected={deleteSelected}
                        />
                    </div>
                    <hr />
                    <div className="m-2 p-4 border-2 text-center"> &hellip; </div>
                </div>
            ) : (
                <div>
                    <div className="m-2 p-4 border-2 text-center">
                        <span className="font-bold text-blue-900">no</span>
                        <span className=""> selected note</span>
                    </div>
                    <div className="m-2 p-4 border-2">
                        <NewNote onNewNote={onNewNote} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default NoteActions;
