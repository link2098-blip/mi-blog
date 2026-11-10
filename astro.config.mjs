import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	// Cambia "tu-usuario" por tu nombre de usuario real en GitHub
	site: 'https:/github.com/link2098-blip',
	
	// Escribe exactamente el nombre que le darás a tu repositorio en GitHub
	// Por los errores anteriores vi que tu carpeta se llama "mi-blog", así que asumo que será ese.
	base: '/mi-blog', 
	
	integrations: [mdx(), sitemap()],
});