import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dotenv from 'dotenv';

export default defineConfig(({ mode }) => {
    // Load environment variables from .env file
    dotenv.config({ path: `.env.${mode}` });

    return {
        plugins: [vue()],
    };
});