import { FC } from "react";
import { Editor } from "react-quill-editor";
import MyCustomToolbar from "./MyCustomToolbar";

const MyEditor: FC = () => {
    return (
        <Editor height={"calc(100vh - 10rem)"}>
            <MyCustomToolbar />
        </Editor>
    );
};

export default MyEditor;
