import Quill, { QuillOptionsStatic } from "quill";
import { createContext } from "react";
import { options } from "../config";

export interface ContextProps {
    editor: Element | null;
    quill: Quill | null;
    options: QuillOptionsStatic;
};

export const Context = createContext<ContextProps>({ editor: null, quill: null, options: options });
