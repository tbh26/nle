import { isEqual, isNote } from './Note';

function NotesList(props) {
    const { notes, onSelectNote, selectedNote } = props;
    const hasNotes = notes.length !== 0;
    const hasSelectedNote = isNote(selectedNote);
    //
    console.debug(`NotesList; hasNotes: ${hasNotes}, notes: `, notes);
    console.debug(
        `NotesList; hasSelectedNote: ${hasSelectedNote}, selected note:`,
        selectedNote
    );
    return (
        // <div className="m-8 p-4 border-2" onClick={() => onSelectNote(null)} >
        <div className="m-8 p-4 border-2">
            {hasNotes ? (
                <div className="grid">
                    {notes.map((note) => {
                        let isSelected = false;
                        if (hasSelectedNote && isEqual(note, selectedNote)) {
                            isSelected = true;
                            console.debug('NotesList, map each note; note is selected:', note);
                        }
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
                                        <div
                                            key={note.title}
                                            className="m-2 p-2 rounded-xl shadow-xl w-full text-center bg-sky-500">
                                            {note.title}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="m-2 p-2 text-center">
                    <div className="m-2 p-2 text-lg font-semibold">no notes</div>
                    <div className="m-2 p-2 font-light">(add a note on the side)</div>
                </div>
            )}
        </div>
    );
}

export default NotesList;
