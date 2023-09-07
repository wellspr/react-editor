import Quill, { QuillOptionsStatic } from "quill";

export type QuillTypes = {
    quill: Quill;
    quillOptions: QuillOptionsStatic
};

export { Provider } from "./Provider";
export { Editor } from "./Editor";
export { useEditor, useEditorHeight } from "./hooks";

import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
import "./index.css";