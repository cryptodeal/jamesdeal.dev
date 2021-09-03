const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool',
		quotes: true,
		ellipses: true
	},

	remarkPlugins: [
		import('remark-github'),
		{
			// Use your own repository
			repository: 'https://github.com/cryptodeal/jamesdeal.dev.git'
		},
		import('remark-abbr')
	],
	rehypePlugins: [
		import('rehype-slug'),
		[
			import('rehype-autolink-headings'),
			{
				behavior: 'wrap'
			}
		]
	]
};

export default config;
