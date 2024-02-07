import { FC, ReactNode, useEffect } from "react";
import { useEditor, useEditorHeight } from "../hooks";
import { DeltaType } from "../types";

interface EditorProps {
    children?: ReactNode;
    height: number | string;
    initialValue?: DeltaType;
}

const Editor: FC<EditorProps> = ({ height, children, initialValue }) => {

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

    useEffect(() => {
        if (initialValue) {
            quill && quill.setContents(initialValue);
        }
    }, [initialValue, quill]);

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