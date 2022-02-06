function SelectedNote(props) {
    const { selectedNote } = props;
    let hasSelectedNote = false;
    let title = '';
    let content = '';
    if (selectedNote && selectedNote !== {}) {
        if ('title' in selectedNote && 'content' in selectedNote) {
            hasSelectedNote = true;
            title = selectedNote.title;
            content = selectedNote.content;
        }
    }
    console.debug('selected note: ', selectedNote);
    console.debug('has selected note: ', hasSelectedNote);
    return (
        <div>
            <div hidden={hasSelectedNote}>
                <header className="text-center">
                    <b>NO</b> selected note.
                </header>
            </div>
            <div hidden={!hasSelectedNote}>
                <header className="font-semibold">selected note</header>
                <div>{title}</div>
                <div>{content}</div>
            </div>
        </div>
    );
}

export default SelectedNote;
