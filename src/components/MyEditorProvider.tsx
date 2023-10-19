import "highlight.js/styles/stackoverflow-dark.min.css";
import { FC, ReactNode } from "react";
import { Provider } from "react-quill-editor";
import type { Config } from "react-quill-editor";
import { customFonts } from "../config/myCustomFonts";

interface MyEditorProps {
    children: ReactNode;
}

const config: Config = {
    options: {
        theme: "snow",
        modules: {
            syntax: true,
            toolbar: "#toolbar"
        },
    },
    fonts: customFonts
};

const MyEditorProvider: FC<MyEditorProps> = ({ children }) => {
    return (
        <Provider config={config}>
            {children}
        </Provider>
    );
};

export default MyEditorProvider;
