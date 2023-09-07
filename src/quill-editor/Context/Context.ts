import Quill, { QuillOptionsStatic } from "quill";
import { createContext } from "react";
import { options } from "../config";

export interface ContextProps {
    editor: Element | null;
    quill: Quill | null;
    options: QuillOptionsStatic;
    editorRef: React.MutableRefObject<HTMLDivElement | null> | null;
};

const initialValue = { 
    editor: null, 
    quill: null, 
    options: options, 
    editorRef: null 
};

export const Context = createContext<ContextProps>(initialValue);