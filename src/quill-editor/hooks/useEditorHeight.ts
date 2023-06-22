import Quill from "quill";
import { useEffect, useState } from "react";

export const useEditorHeight = (height: number | string, quill: Quill | null | undefined) => {

    const [editorHeight, setEditorHeight] = useState<number | string>(height);
    
    useEffect(() => {
        const toolbar = document.querySelector(".ql-toolbar");
        const toolbarHeight = toolbar?.getBoundingClientRect().height;
        
        if (quill) {
            if (toolbarHeight && toolbarHeight > 0) {
                if (typeof(height)==="string") {
                    if (height.trim().endsWith("%")) {
                        setEditorHeight(`calc(100% - ${toolbarHeight}px)`);
                    } else {
                        setEditorHeight(`calc(${height} - ${toolbarHeight}px)`);
                    }
                } else if (typeof(height)==="number") {
                    setEditorHeight(height - toolbarHeight);
                }
            } else {
                if (typeof(height)==="string") {
                    if (height.trim().endsWith("%")) {
                        setEditorHeight("100%");
                    } else {
                        setEditorHeight(height);
                    }
                } else if (typeof(height)==="number") {
                    setEditorHeight(height);
                }
            }
        }
    }, [quill, height]);

    return { editorHeight }
};