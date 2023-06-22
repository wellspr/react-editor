import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import "../index.css";
import Quill, { QuillOptionsStatic } from "quill";
import { FC, ReactNode, useEffect, useState } from "react";
import { Context } from "../Context";
import { fonts, options as defaultOptions } from "../config";

interface ProviderProps {
    config: {
        options?: QuillOptionsStatic;
        fonts?: string[];
    },
    children: ReactNode;
}

export const Provider: FC<ProviderProps> = ({ config, children }) => {

    const [quill, setQuill] = useState<Quill | null>(null);
    const [quillStarted, setQuillStarted] = useState<boolean>(false);
    const [editor, setEditor] = useState<Element | null>(null);
    const [options, setOptions] = useState(defaultOptions);

    useEffect(() => {
        setOptions({ ...defaultOptions, ...config.options });
    }, [config.options]);

    useEffect(() => {
        setEditor(document.querySelector("#editor"));

        if (editor) {
            if (!quillStarted) {                
                const FontAttributor = Quill.import("attributors/class/font");
                FontAttributor.whitelist = config.fonts ? [ ...fonts, ...config.fonts ] : fonts;
                Quill.register(FontAttributor, true);

                console.log("Starting quill...");
                setQuill(new Quill(editor, options));
                setQuillStarted(true);
            } else {
                console.log("Quill is on...");
            }
        }
    }, [editor, quillStarted]);

    return <Context.Provider value={{ editor, quill, options }}>
        { children }
    </Context.Provider>
};
