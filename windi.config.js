import typography from 'windicss/plugin/typography';
import forms from 'windicss/plugin/forms';
import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
	darkMode: 'class',
	preflight: {
		enableAll: true
	},
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						color: '#27272a',
						a: {
							textDecoration: 'underline',
							color: '#991b1b',
							'&:hover': {
								color: '#7f1d1d'
							}
						},
						h1: {
							color: '#991b1b'
						},
						h2: {
							color: '#991b1b'
						},
						h3: {
							color: '#991b1b'
						},
						h4: {
							color: '#991b1b'
						}
					}
				},
				dark: {
					css: {
						color: '#e4e4e7',
						a: {
							textDecoration: 'underline',
							color: '#34d399',
							'&:hover': {
								color: '#86efac'
							}
						},
						h1: {
							color: '#34d399'
						},
						h2: {
							color: '#34d399'
						},
						h3: {
							color: '#34d399'
						},
						h4: {
							color: '#34d399'
						}
					}
				}
			}
		},
		boxShadow: {
			animate:
				'0.5px 0.5px rgba(255,255,255,1), 1.5px 1.5px rgba(255,255,255,1), 2.5px 2.5px rgba(255,255,255,1), 3.5px 3.5px rgba(255,255,255,1), 4.5px 4.5px rgba(255,255,255,1)'
		}
	},
	plugins: [typography, forms]
});
