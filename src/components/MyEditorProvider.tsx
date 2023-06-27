import { FC, ReactNode } from "react";
import { Provider } from "react-quill-editor";
import { customOpt, customFonts } from "../config/myCustomConfig";

interface MyEditorProps {
    children: ReactNode;
}

const MyEditorProvider: FC<MyEditorProps> = ({ children }) => {
    return (
        <Provider config={{ options: customOpt, fonts: customFonts }}>
            {children}
        </Provider>
    );
};

export default MyEditorProvider;
