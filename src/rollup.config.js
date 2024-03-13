// rollup.config.js
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: 'src/Icons/index.ts',
    output: [
      {
        file: 'src/Icons/dist/index.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: 'src/Icons/dist/index.es.js',
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ],
    external: [ 'react', 'react-is', 'react-router', 'react/jsx-runtime' ],
    plugins: [
      external(),
      resolve(),
      typescript({
        rollupCommonJSResolveHack: true,
        exclude: ['**/__tests__/**', '**/*.stories.*'],
        clean: true,
      }),
      commonjs({
        include: /node_modules/,
        namedExports: {
          'node_modules/react-js/index.js': ['isValidElementType'],
        },
      }),
    ],
  },
];