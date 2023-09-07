import Quill, { QuillOptionsStatic } from "quill";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { Context } from "../Context";
import { fonts, options as defaultOptions } from "../config";

export interface Config {
    options?: QuillOptionsStatic;
    fonts?: string[];
}

export interface ProviderProps {
    config: Config,
    children: ReactNode;
}

export const Provider: FC<ProviderProps> = ({ config, children }) => {

    const [quill, setQuill] = useState<Quill | null>(null);
    const [quillStarted, setQuillStarted] = useState<boolean>(false);
    const [editor, setEditor] = useState<Element | null>(null);
    const [options, setOptions] = useState<QuillOptionsStatic>(defaultOptions);
    const editorRef = useRef(null);

    useEffect(() => {
        setOptions({ ...defaultOptions, ...config.options });
    }, [config.options]);

    useEffect(() => {

        if (editorRef.current) {
            setEditor(editorRef.current);

            if (editor) {
                if (!quillStarted) {
                    const FontAttributor = Quill.import("attributors/class/font");
                    FontAttributor.whitelist = config.fonts ? [...fonts, ...config.fonts] : fonts;
                    Quill.register(FontAttributor, true);

                    console.log("Starting quill...");
                    setQuill(new Quill(editor, options));
                    setQuillStarted(true);
                } else {
                    console.log("Quill is on...");
                }
            }
        }
    }, [editor, quillStarted]);

    return <Context.Provider value={{ editor, quill, options, editorRef }}>
        {children}
    </Context.Provider>
};
