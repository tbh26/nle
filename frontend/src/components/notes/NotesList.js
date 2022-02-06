function NotesList(props) {
    const { notes, onSelectNote, selectedNote } = props;
    const hasNotes = notes.length !== 0;
    const selectedTitle =
        selectedNote && selectedNote.hasOwnProperty('title') ? selectedNote.title : '';
    const selectedContent =
        selectedNote && selectedNote.hasOwnProperty('content') ? selectedNote.content : '';

    console.info('has notes:', hasNotes);
    return (
        <div className="m-8 p-4 border-2">
            <div hidden={!hasNotes} className="grid">
                {notes.map((note) => {
                    const isSelected =
                        note.title === selectedTitle && note.content === selectedContent;
                    return (
                        <div onClick={() => onSelectNote(note)}>
                            {isSelected ? (
                                <div>
                                    <div className="m-2 p-2 rounded-xl shadow-xl w-full font-bold text-center bg-sky-500">
                                        {note.title}{' '}
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="m-2 p-2 rounded-xl shadow-xl w-full text-center bg-sky-500">
                                        {note.title}{' '}
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
