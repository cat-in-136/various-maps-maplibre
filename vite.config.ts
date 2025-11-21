import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		sourcemap: true,
		rollupOptions: {
			output: {
				manualChunks: {
					'maplibre-gl': ['maplibre-gl']
				}
			}
		}
	},
	ssr: {
		noExternal: ['maplibre-gl']
	}
});
