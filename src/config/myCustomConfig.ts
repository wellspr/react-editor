import { QuillOptionsStatic } from "quill";

export const customFonts: string[] = [
    "ubuntu",
    "ubuntu-mono",
    "roboto",
    "roboto-mono",
    "montserrat",
    "open-sans",
    "wix-madefor-display",
    "poppins",
];

export const customOpt: QuillOptionsStatic = {
    theme: "snow",
    modules: { 
        toolbar: "#toolbar"
    },  
};
