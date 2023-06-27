import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
import * as packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tsConfigPaths(),
        dts({
            include: ['src/quill-editor/'],
        }),
    ],
    build: {
        lib: {
            entry: resolve('src', 'quill-editor/index.ts'),
            name: 'ReactQuillEditor',
            formats: ['es', 'umd'],
            fileName: (format) => `react-quill-editor.${format}.js`,
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.peerDependencies)],
            output: {
                exports: "named",
                globals: {
                    react: "React",
                },
            },
        },
    },
});
