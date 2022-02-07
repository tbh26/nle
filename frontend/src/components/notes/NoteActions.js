import NewNote from './NewNote';
import SelectedNote from './SelectedNote';
import { isNote } from './Note';

function NoteActions(props) {
    const { onNewNote, selectedNote, editSelected, deleteSelected } = props;
    let hasSelectedNote = isNote(selectedNote);
    return (
        <div className="m-8">
            {hasSelectedNote ? (
                <div>
                    <div className="m-2 p-4 border-2">
                        <SelectedNote
                            selectedNote={selectedNote}
                            editSelected={editSelected}
                            deleteSelected={deleteSelected}
                        />
                    </div>
                    <div className="m-2 p-4 border-2 text-center"> =-= </div>
                </div>
            ) : (
                <div>
                    <div className="m-2 p-4 border-2 text-center">
                        <b>no</b> selected note!
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
