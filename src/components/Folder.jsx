import React, { useState } from 'react';
import './Folder.css';

function Folder({ data }) {
    const [expand, setExpand] = useState(false);

    if (data.isFolder) {
        return (
            <div className="folder">
                <div onClick={() => setExpand(!expand)}>
                    <span>
                        📁 {data.name}
                    </span>
                </div>

                <div
                    className={`folder-items ${expand ? "" : "hidden"}`}
                >
                    {data.items.map((it) => {
                        return (
                            <Folder data={it} key={it.id} />
                        );
                    })}
                </div>
            </div>
        );
    } else {
        return <span className="file">📄 {data.name}</span>;
    }
}

export default Folder;
