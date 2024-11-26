import React, { useState } from 'react';
import './Folder.css';

function Folder({ data }) {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] =  useState({
        visible: false,
        isFolder: null
    });

    function handleNewFolder(e, isFolder) {
        e.stopPropagation();

        setExpand(true);
        setShowInput({
            visible: true,
            isFolder
        })
    }

    function handleAddFolder(e) {
        if(e.keyCode === 13 && e.target.value) {
            //add logic
            setShowInput({...showInput, visible: false});
        }
    }

    if (data.isFolder) {
        return (
            <div>
                <div className="folder" onClick={() => setExpand(!expand)}>
                    <span>
                        📁 {data.name}
                    </span>

                    <button className="btn-folder" onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
                    <button className="btn-file" onClick={(e) => handleNewFolder(e, false)}>File +</button>
                </div>

                <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
                    {
                        showInput.visible && (
                            <div className='input-container'>
                                <span>{showInput.isFolder ? "📁": "📄"}</span>
                                <input className='input-box' 
                                    type='text'
                                    autoFocus
                                    onBlur={() => setShowInput({...showInput, visible: false})}
                                    onKeyDown={handleAddFolder}
                                >
                                </input>
                            </div>
                        )
                    }
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
