import { FC, useEffect } from "react";
import { Editor, useEditor } from "react-quill-editor";
import MyCustomToolbar from "./MyCustomToolbar";

const MyEditor: FC = () => {

    const { content } = useEditor();

    useEffect(() => {
        console.log(content);
    }, [content]);

    return (
        <Editor height={"calc(100vh - 10rem)"}>
            <MyCustomToolbar />
        </Editor>
    );
};

export default MyEditor;
