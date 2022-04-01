import NotesList from './NotesList';
import NoteActions from './NoteActions';
import { isEqual, isNote, noteObject } from './Note';

import { useState } from 'react';

function NotesSteward() {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);

    function newNote(someObject) {
        console.debug('NotesSteward/newNote; new note, object:', someObject);
        if (someObject.newNote && isNote(someObject.newNote)) {
            const newOne = noteObject(someObject.newNote);
            console.debug('NotesSteward/newNote; new one (note):', newOne);
            const newNotes = [...notes, newOne];
            setNotes(newNotes);
            // console.debug('(new) notes:', notes);
        } else {
            console.warn('NotesSteward, new-note, invalid new note (object):', someObject);
        }
    }

    function updateSelectNote(note) {
        console.debug('NotesSteward/updateSelectNote; (de)select clicked note:', note);
        console.debug(
            'NotesSteward/updateSelectNote; current (old) selected note:',
            selectedNote
        );
        if (isNote(note)) {
            if (isEqual(note, selectedNote)) {
                //// deselect / toggle (clicked again)
                setSelectedNote(null);
            } else {
                setSelectedNote(note);
            }
        } else {
            console.debug('NotesSteward/updateSelectNote; *not* a note, deselect any...');
            setSelectedNote(null);
        }
    }

    function updateEditedNote(note) {
        console.info('NotesSteward/updateEditedNote; update edited (selected) note:', note);
    }

    function deleteSelectedNote(note) {
        // maybe a confirmation?
        console.debug('NotesSteward/deleteSelectedNote, delete select note:', note);
        const newNotesList = notes.filter((n) => {
            return note.title !== n.title;
        });
        console.debug(
            'NotesSteward/deleteSelectedNote; update notes, new notes list:',
            newNotesList
        );
        setNotes(newNotesList);
        // and clear selected note..
        setSelectedNote(null);
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
                updateSelected={updateEditedNote}
                deleteSelected={deleteSelectedNote}
                onNewNote={newNote}
            />
        </div>
    );
}

export default NotesSteward;
