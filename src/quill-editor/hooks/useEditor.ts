import { useContext } from "react";
import { Context } from "../Context";
import { ContextProps } from "../types";

export const useEditor: () => ContextProps = () => useContext(Context);