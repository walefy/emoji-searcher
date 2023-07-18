import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    plugins: [react()],
    define: { 'process.env.EMOJI_API_KEY': JSON.stringify(env.EMOJI_API_KEY) },
  });
};
