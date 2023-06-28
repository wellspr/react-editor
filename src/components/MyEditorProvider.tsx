import { FC, ReactNode } from "react";
import { Provider } from "react-quill-editor";
import { customFonts } from "../config/myCustomFonts";

interface MyEditorProps {
    children: ReactNode;
}

const MyEditorProvider: FC<MyEditorProps> = ({ children }) => {
    return (
        <Provider config={{ 
            options: {
                theme: "snow", 
                modules: {
                    toolbar: "#toolbar"
                },
            }, 
            fonts: customFonts 
            }}>
            {children}
        </Provider>
    );
};

export default MyEditorProvider;
