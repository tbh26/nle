export function NewNoteObject(title, content) {
    return {
        title,
        content,
    };
}

export function isEqual(note1, note2) {
    if (!note1 || !note2) {
        console.info(
            'notes not equal, maybe null or undefined? more info note1 & note2: ',
            note1,
            note2
        );
        return false;
    }
    const { title1, content1 } = note1;
    const { title2, content2 } = note2;
    return title1 === title2 && content1 === content2;
}

export function isNote(note) {
    let isAnote = false;
    if (note && note.hasOwnProperty('title') && note.hasOwnProperty('content')) {
        const { title } = note;
        if (title !== '') {
            // note title should not be empty string
            isAnote = true;
        }
    }
    return isAnote;
}

export function noteObj(note) {
    let title = '';
    let content = '';
    if (note && note.hasOwnProperty('title') && note.hasOwnProperty('content')) {
        title = note.title;
        content = note.content;
    } else {
        console.warn('fail on convertion to a note object, improper attributes? note:', note);
    }
    return { title, content };
}
