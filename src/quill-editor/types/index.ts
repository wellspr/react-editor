import Quill, { QuillOptionsStatic } from "quill";
import Delta from "quill-delta";

export type Config = {
    options?: QuillOptionsStatic;
    fonts?: string[];
}

export type Content = { 
    delta: typeof Delta | undefined;
    html: string | undefined;
}

export interface ProviderProps {
    config: Config;
    children: React.ReactNode;
}

export interface ContextProps {
    editor: Element | null;
    quill: Quill | null;
    options: QuillOptionsStatic;
    editorRef: React.MutableRefObject<HTMLDivElement | null> | null;
    content: Content;
}
