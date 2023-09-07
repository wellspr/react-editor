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
        //dts({ include: ['src/quill-editor/'], }),
        dts({
            insertTypesEntry: true,
            include: [
                'src/quill-editor/'
            ],
            outDir: "dist/types",
            copyDtsFiles: true,
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/quill-editor/index.ts'),
            name: 'react-quill-editor',
            //formats: ['es', 'umd'],
            //fileName: (format) => `react-quill-editor.${format}.js`,
            fileName: 'react-quill-editor',
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.peerDependencies)],
            output: {
                exports: "named",
                globals: {
                    react: "React",
                    quill: "Quill",
                },
            },
        },
    },
});
