import { createContext } from "react";
import { options } from "../config";
import { ContextProps } from "../types";

const initialValue = { 
    editor: null, 
    quill: null, 
    options: options, 
    editorRef: null,
    content: { delta: undefined, html: "" }
};

export const Context = createContext<ContextProps>(initialValue);