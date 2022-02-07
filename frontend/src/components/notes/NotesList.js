import { noteObj } from './Note';

function NotesList(props) {
    const { notes, onSelectNote, selectedNote } = props;
    const hasNotes = notes.length !== 0;
    const selectedNoteObj = noteObj(selectedNote);
    console.info('has notes:', hasNotes);
    return (
        <div className="m-8 p-4 border-2">
            <div hidden={!hasNotes} className="grid">
                {notes.map((note) => {
                    const isSelected =
                        note.title === selectedNoteObj.title &&
                        note.content === selectedNoteObj.content;
                    return (
                        <div onClick={() => onSelectNote(note)}>
                            {isSelected ? (
                                <div>
                                    <div
                                        key={note.title}
                                        className="m-2 p-2 rounded-xl shadow-xl w-full font-bold text-center bg-sky-500">
                                        {note.title}
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="m-2 p-2 rounded-xl shadow-xl w-full text-center bg-sky-500">
                                        {note.title}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <div hidden={hasNotes}>
                <div>
                    <b>no notes</b>
                </div>
            </div>
        </div>
    );
}

export default NotesList;
