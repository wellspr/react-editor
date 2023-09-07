import { FC, ReactNode, useEffect } from "react";
import { useEditor } from "../hooks";
import { useEditorHeight } from "../hooks";

export interface EditorProps {
    children?: ReactNode;
    height: number | string;
}

const Editor: FC<EditorProps> = ({ height, children }) => {

    const { quill, options, editorRef } = useEditor();
    const { editorHeight } = useEditorHeight(height, quill);

    useEffect(() => { quill && quill.focus() }, [quill]);

    const renderCustomToolbar = () => {
        if (typeof (options.modules?.toolbar) === "string") {
            return <div id="toolbar">
                {children}
            </div>;
        }
        return null;
    };

    return (
        <div className="editor-container" style={{ height }}>
            { renderCustomToolbar() }
            <div ref={editorRef} style={{
                height: editorHeight,
                maxHeight: editorHeight
            }}
            />
        </div>
    );
};

export default Editor;