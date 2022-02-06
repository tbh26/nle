import NotesList from './NotesList';
import NoteActions from './NoteActions';
import { useState } from 'react';

function NotesSteward() {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);

    function newNote(obj) {
        console.info('new note, obj:', obj);
        if (obj.newNote && 'title' in obj.newNote && 'content' in obj.newNote) {
            const { title, content } = obj.newNote;
            const newNotes = [...notes, { title, content }];
            setNotes(newNotes);
        } else {
            console.warn('new-note, invalid new note:', obj);
        }
        console.info('notes:', notes);
    }

    function updateSelectNote(note) {
        console.info('(new) selected note:', note);
        if (note && 'title' in note && 'content' in note) {
            if (selectedNote && selectedNote.title && selectedNote.content) {
                if (
                    note.title === selectedNote.title &&
                    note.content === selectedNote.content
                ) {
                    setSelectedNote(null); // deselect
                } else {
                    setSelectedNote(note);
                }
            } else {
                setSelectedNote(note);
            }
        } else {
            console.warn('fail on note selection, note:', note);
        }
    }

    return (
        <div className="grid grid-cols-2 gap-4">
            <NotesList
                notes={notes}
                onSelectNote={updateSelectNote}
                selectedNote={selectedNote}
            />
            <NoteActions selectedNote={selectedNote} onNewNote={newNote} />
        </div>
    );
}

export default NotesSteward;
