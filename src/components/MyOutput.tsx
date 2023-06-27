import { FC, useEffect } from "react";
import { useEditor } from "react-quill-editor";

const MyOutput: FC = () => {

    const { quill } = useEditor();

    useEffect(() => {
        const handler = () => {
            console.log(quill?.getContents()?.ops[0]);
            console.log(quill?.root.innerHTML);
        };

        if (quill) {
            quill.on("editor-change", handler);
        }

        return () => {
            if (quill) {
                quill.off("editor-change", handler);
            }
        }
    }, [quill]);

    return null;
};

export default MyOutput;