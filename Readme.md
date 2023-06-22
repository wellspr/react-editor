# React Quill Editor

This is a react typescript wrapper for [React Quill JS Editor](https://quilljs.com). 

## Get started

All editor components and hooks must be children of a `Provider` component, which optionally accepts a `config` object containing custom options and custom fonts to be used in the project.

### Provider

```js
<Provider config={{ options: customOpt, fonts: customFonts }}>
    {children}
</Provider>
```

### Editor

The Editor component renders the editor on the screen, and expects a prop `height`. Bellow we render the Editor with a height of 300px. 

```js
<Editor height={300} />
```

One can also provide height as a string, `height={"300px"}` or even as a percentage, `height={"85%"}`.

### Custom Toolbar

A custom toolbar can be provided as a child of `Editor`.


## Example

`App.tsx`
```tsx
import { FC } from "react";
import MyEditorProvider from "./components/MyEditorProvider";
import MyEditor from "./components/MyEditor";

const App: FC = () => {
    return (
        <MyEditorProvider>
            <MyEditor />
        </MyEditorProvider>
    );
};

export default App;

```

`MyEditorProvider.tsx`
```tsx
import { FC, ReactNode } from "react";
import { Provider } from "../quill-editor";
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
```

`MyEditor.tsx`
```tsx
import { FC } from "react";
import Editor from "../quill-editor";

const MyEditor: FC = () => {
    return (
        <Editor height={300} />
    );
};

export default MyEditor;
```

