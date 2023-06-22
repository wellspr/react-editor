import { FC } from "react";
import { customFonts } from "../config/myCustomConfig";

const MyCustomToolbar: FC = () => {

    return (
        <div className="toolbar">
            <div className="toolbar__group">
                <div className="stacked">
                    <label htmlFor="header">Header</label>
                    <select name="header" id="header" className="ql-header">
                        <option value="0">Normal</option>
                        <option value="1">Header 1</option>
                        <option value="2">Header 2</option>
                        <option value="3">Header 3</option>
                        <option value="4">Header 4</option>
                        <option value="5">Header 5</option>
                        <option value="6">Header 6</option>
                    </select>
                </div>
                <div className="stacked">
                    <label htmlFor="font">Font Family</label>
                    <select name="font" id="font" className="ql-font">
                        <option value="none"></option>
                        { 
                            customFonts.map(font => {
                                return <option value={font} key={font}>{font}</option>
                            })
                        }
                    </select>
                </div>
                <div className="stacked">
                    <label htmlFor="size">Font Size</label>
                    <select name="size" id="size" className="ql-size"></select>
                </div>
            </div>

            <div className="toolbar__group wrap">
                <button className="ql-bold"></button>
                <button className="ql-italic"></button>
                <button className="ql-underline"></button>
                <button className="ql-strike"></button>

                <button className="ql-list" value="ordered"></button>
                <button className="ql-list" value="bullet"></button>
                <button className="ql-indent" value="+1"></button>
                <button className="ql-indent" value="-1"></button>
                <select className="ql-align"></select>
                
                <button className="ql-blockquote"></button>
                <button className="ql-link"></button>
                <button className="ql-code"></button>
                <button className="ql-code-block"></button>

                <select className="ql-color"></select>
                <select className="ql-background"></select>

                <button className="ql-clean"></button>
            </div>
        </div>
    );
};

export default MyCustomToolbar;