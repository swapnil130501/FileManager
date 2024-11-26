import React, { useState } from 'react';
import './Folder.css';

function Folder({ handleInsertNode, handleRenameNode, data }) {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] =  useState({
        visible: false,
        isFolder: null
    });

    const [editName, setEditName] = useState(false);
    const [newName, setNewName] = useState(data.name);

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
            handleInsertNode(data.id, e.target.value, showInput.isFolder)
            setShowInput({...showInput, visible: false});
        }
    }

    function handleRename(e) {
        if(e.keyCode === 13 && newName.trim()) {
            handleRenameNode(data.id, newName);
            setEditName(false);
        }
    }

    function handleDoubleClick() {
        setEditName(true);
    }
 
    if (data.isFolder) {
        return (
            <div>
                <div className="folder" onClick={() => setExpand(!expand)} onDoubleClick={handleDoubleClick}>
                {editName && (
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        onKeyDown={handleRename}
                        onBlur={() => setEditName(false)}
                        autoFocus
                        className="rename-input"
                    />
                )}
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
                            <Folder handleInsertNode = {handleInsertNode} handleRenameNode = {handleRenameNode} data={it} key={it.id} />
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
