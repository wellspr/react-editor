//import "../dist/style.css";
import { FC } from "react";
import MyEditorProvider from "./components/MyEditorProvider";
import MyEditor from "./components/MyEditor";
import MyOutput from "./components/MyOutput";

const App: FC = () => {
    return (
        <div className="app">
            <header className="app__header">
                <h1>React Vite Quill</h1>
            </header>
            <main className="app__main">
                <MyEditorProvider>
                    <MyEditor />
                    <MyOutput />
                </MyEditorProvider>
            </main>
            <footer className="app__footer">
                <p>&copy; 2023 - React Vite Quill Editor</p>
            </footer>
        </div>
    );
};

export default App;
