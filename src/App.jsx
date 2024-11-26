import { useState } from 'react'
import './App.css'
import explorer from './data/folderData';
import Folder from './components/Folder';
import useTraverseTree from './hooks/useTraverseTree';

function App() {
    const [data, setData] = useState(explorer);
    const { insertNode, renameNode } = useTraverseTree();

    function handleInsertNode(folderId, item, isFolder) {
        const finalTree = insertNode(data, folderId, item, isFolder);
        setData(finalTree);
    }

    function handleRenameNode(folderId, newName) {
        const finalTree = renameNode(data, folderId, newName);
        setData(finalTree);
    }

    return (
        <>
            <Folder handleInsertNode = {handleInsertNode} handleRenameNode = {handleRenameNode} data={data}></Folder>
        </>
    )
}

export default App
