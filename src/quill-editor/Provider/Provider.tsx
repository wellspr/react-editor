import Quill, { QuillOptionsStatic } from "quill";
import { FC, useEffect, useRef, useState } from "react";
import { Context } from "../Context";
import { fonts, options as defaultOptions } from "../config";
import { Content, ProviderProps } from "../types";

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

    const [content, setContent] = useState<Content>({
        delta: quill?.getContents(),
        html: quill?.root.innerHTML,
    });

    useEffect(() => {
        const handler = () => {
            const delta = quill?.getContents();
            const html = quill?.root.innerHTML;
            setContent({ delta, html });
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

    const value = { editor, quill, options, editorRef, content };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};
