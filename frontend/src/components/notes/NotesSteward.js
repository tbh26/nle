import NotesList from './NotesList';
import NoteActions from './NoteActions';
import { isEqual, isNote } from './Note';

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
        console.info('(de)select note:', note);
        if (isNote(note)) {
            if (isEqual(note, selectedNote)) {
                // deselect of toggle(clicked again)
                setSelectedNote(null);
            } else {
                setSelectedNote(note);
            }
        } else {
            console.warn('fail on note (de)select, note:', note);
        }
    }

    function editSelectedNote(note) {
        console.info('edit selected note:', note);
    }

    function deleteSelectedNote(note) {
        // maybe a confirmation?
        console.info('delete select note:', note);
        const newNotesList = notes.filter((n) => {
            return note.title !== n.title;
        });
        console.info('update notes, new notes list:', newNotesList);
        setNotes(newNotesList);
        // and clear selected note..
    }

    return (
        <div className="grid grid-cols-2 gap-4">
            <NotesList
                notes={notes}
                onSelectNote={updateSelectNote}
                selectedNote={selectedNote}
            />
            <NoteActions
                selectedNote={selectedNote}
                editSelected={editSelectedNote}
                deleteSelected={deleteSelectedNote}
                onNewNote={newNote}
            />
        </div>
    );
}

export default NotesSteward;
