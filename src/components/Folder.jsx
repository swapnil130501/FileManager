import React, { useState } from 'react';
import './Folder.css';

function Folder({ data }) {
    const [expand, setExpand] = useState(false);

    if (data.isFolder) {
        return (
            <div>
                <div className="folder" onClick={() => setExpand(!expand)}>
                    <span>
                        📁 {data.name}
                    </span>

                    <div>
                        <button className="btn-folder">Folder +</button>
                        <button className="btn-file">File +</button>
                    </div>
                </div>

                <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
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
