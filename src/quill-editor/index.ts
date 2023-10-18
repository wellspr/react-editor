import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
import "./index.css";

import Quill, { QuillOptionsStatic } from "quill";

export type QuillType = Quill;
export type QuillOptions = QuillOptionsStatic;
export type { Config } from "./types";

export { Provider } from "./Provider";
export { Editor } from "./Editor";
export { useEditor } from "./hooks";