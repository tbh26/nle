import { HomeIcon } from '@heroicons/react/outline';

function Header() {
    return (
        <header className="app-header">
            <div className="m-8 p-4 border-2 rounded-xl shadow-xl">
                <div className="pl-4 flex">
                    <HomeIcon className="h-6" /> {/* onClick nav? */}
                    <div className="pl-4 text-blue-800 text-lg">
                        <strong>N</strong>otes, <strong>L</strong>inks, <strong>E</strong>t
                        cetera
                    </div>
                </div>
            </div>
            <div className="m-2 p-4 text-center">
                <div>
                    <em>message 1</em>
                </div>
                <div>message 2</div>
                <div>...</div>
            </div>
            <hr />
            <nav className="m-2 p-4 flex justify-evenly font-medium">
                <div className="px-8 py-2 border-b-4 border-gray-500">notes</div>
                <div className="px-8 py-2 border-4 rounded-xl shadow-xl hover:bg-gray-400 transition duration-500">
                    links
                </div>
                <div className="px-8 py-2 border-4 rounded-xl shadow-xl hover:bg-gray-400 transition ease-in-out delay-300">
                    other
                </div>
            </nav>
            <hr />
        </header>
    );
}

export default Header;
