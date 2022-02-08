import { isNote } from './Note';
import { useState } from 'react';

function SelectedNote(props) {
    const { selectedNote, updateSelected, deleteSelected } = props;
    let hasSelectedNote = false;
    let title = '';
    let content = '';
    if (isNote(selectedNote)) {
        hasSelectedNote = true;
        title = selectedNote.title;
        content = selectedNote.content;
    }
    console.debug(`has selected note: ${hasSelectedNote}, selected note:`, selectedNote);

    const [editMode, setEditMode] = useState(false);
    const [leftButtonText, setLeftButtonText] = useState('edit');
    const [rightButtonText, setRightButtonText] = useState('delete');

    function updateEditMode(newState) {
        if (newState === true || newState === false) {
            setEditMode(newState);
        } else {
            console.debug('updateEditMode, newState not A boolean? newState:', newState);
        }
    }

    function updatedEditedNote(note) {
        updateSelected(note);
        updateEditMode(false);
        setLeftButtonText('cancel');
        setRightButtonText('update');
    }

    function intoEditMode() {
        updateEditMode(true);
        setLeftButtonText('cancel');
        setRightButtonText('update');
    }

    function cancelEdit() {
        updateEditMode(false);
        setLeftButtonText('edit');
        setRightButtonText('delete');
    }

    function toggleEditMode() {
        updateEditMode(!editMode);
    }

    function deleteSelectedWrapper() {
        deleteSelected(selectedNote);
    }

    return (
        <div>
            {editMode ? (
                <div>
                    <div>
                        <b>edit...</b>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div
                            className="m-2 p-2 rounded-xl shadow-xl bg-sky-400"
                            onClick={cancelEdit}>
                            {leftButtonText}
                        </div>
                        <div className="m-2 p-2 rounded-xl shadow-xl bg-red-500">
                            {rightButtonText}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="m-2 p-2 text-center">
                    <div className="m-2 p-2">
                        selected <span className="font-semibold">note</span>
                    </div>

                    <div className="m-2 p-2 border-2">
                        <div className="bg-gray-200">{title}</div>
                        <div className="m-2 p-4 bg-gray-200">{content}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div
                            className="m-2 p-2 rounded-xl shadow-xl bg-sky-400"
                            onClick={intoEditMode}>
                            {leftButtonText}
                        </div>
                        <div
                            className="m-2 p-2 rounded-xl shadow-xl bg-red-500"
                            onClick={deleteSelectedWrapper}>
                            {rightButtonText}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SelectedNote;
