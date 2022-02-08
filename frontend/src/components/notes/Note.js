export function NewNoteObject(title, content) {
    return noteObject({
        title,
        content,
    });
}

export function NoteWithId(id, note) {
    const n = noteObject(note);
    n.id = id;
    return n;
}

export function isEqual(note1, note2) {
    if (!note1) {
        console.debug('Note; isEqual: note1 invalid, value:', note1);
        return false;
    }
    if (!note2) {
        console.debug('Note; isEqual: note2 invalid, value:', note2);
        return false;
    }
    const n1 = noteObject(note1);
    const n2 = noteObject(note2);
    // console.debug(`Note; isEqual, title1: ${n1.title}, title2: ${n2.title}, content1: ${n1.content}, content2: ${n2.content}.`);
    return n1.id === n2.id && n1.title === n2.title && n1.content === n2.content;
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

export function noteObject(note) {
    let id = -1;
    let title = '';
    let content = '';
    if (note && note.hasOwnProperty('title') && note.hasOwnProperty('content')) {
        title = note.title;
        content = note.content;
    } else {
        console.debug('fail on note convertion, improper attributes? note:', note);
    }
    if (note && note.hasOwnProperty('id')) {
        id = note.id;
    } else {
        console.debug('note object: NO id, using default.');
    }
    return { id, title, content };
}
