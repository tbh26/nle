function NewNote() {
    return (
        <div className="p-2">
            <header>new note</header>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-rows-3">

                    <div className="grid grid-cols-3">
                        <label className="m-2 p-2 text-right">note title</label>
                        <input className="m-2 p-2 col-span-2 max-w-max" id="noteTitle" value="title" type="text" placeholder="title"/>
                    </div>

                    <div className="grid grid-cols-3">
                        <label className="m-2 p-2 text-right">note content</label>
                        <input className="m-2 p-2 col-span-2 max-w-max" id="noteContent" value="content" type="text" placeholder="note.."/>
                    </div>

                    <div>
                        <button type="submit" className="m-2 p-2 border-2 rounded-xl shadow-xl w-full">submit</button>
                    </div>

                </div>
            </form>
        </div>
    );

    function handleSubmit(e) {
        e.preventDefault();
        console.info('submit, event:', e);
    }
}

export default NewNote;
