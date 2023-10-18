import { FC } from "react";
import { MyEditor, MyEditorProvider } from "./components";

const App: FC = () => {
    return (
        <div className="app">
            <header className="app__header">
                <h1>React Vite Quill</h1>
            </header>
            <main className="app__main">
                <MyEditorProvider>
                    <MyEditor />
                </MyEditorProvider>
            </main>
            <footer className="app__footer">
                <p>&copy; 2023 - React Vite Quill Editor</p>
            </footer>
        </div>
    );
};

export default App;
