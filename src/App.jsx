import { useState } from 'react'
import './App.css'
import explorer from './data/folderData';
import Folder from './components/Folder';

function App() {
    const [data, setData] = useState(explorer);

    return (
        <>
            <Folder data={data}></Folder>
        </>
    )
}

export default App
