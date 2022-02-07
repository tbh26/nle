import { isNote } from './Note';

function SelectedNote(props) {
    const { selectedNote, editSelected, deleteSelected } = props;
    let hasSelectedNote = false;
    let title = '';
    let content = '';
    if (isNote(selectedNote)) {
        hasSelectedNote = true;
        title = selectedNote.title;
        content = selectedNote.content;
    }
    console.debug(`has selected note: ${hasSelectedNote}, selected note:`, selectedNote);

    function editSelectedWrapper() {
        editSelected(selectedNote);
    }

    function deleteSelectedWrapper() {
        deleteSelected(selectedNote);
    }

    return (
        <div>
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
                        onClick={editSelectedWrapper}>
                        edit
                    </div>
                    <div
                        className="m-2 p-2 rounded-xl shadow-xl bg-red-500"
                        onClick={deleteSelectedWrapper}>
                        delete
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectedNote;
