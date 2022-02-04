function NewNote() {
    return (
        <div className="p-2">
            <header>new note</header>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col">

                    <label className="p-2">note title &nbsp;
                        <input id="noteTitle" value="title" type="text" placeholder="title" className="pl-2"/>
                    </label>

                    <label className="p-2">note content &nbsp;
                        <input id="noteContent" value="content" type="text" placeholder="note.." className="pl-2"/>
                    </label>

                    <button type="submit" className="rounded-xl shadow-xl">
                        submit
                    </button>
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
