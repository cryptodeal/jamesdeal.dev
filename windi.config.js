import typography from 'windicss/plugin/typography'
const windiConfig = {
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
              'color': '#991b1b',
              '&:hover': {
                color: '#7f1d1d',
              },
            },
            h1: {
              color: '#991b1b',
            },
            h2: {
              color: '#991b1b',
            },
            h3: {
              color: '#991b1b',
            },
            h4: {
              color: '#991b1b',
            },
          },
        },
      },
    },
		boxShadow: {
			animate:
				'0.5px 0.5px rgba(255,255,255,1), 1.5px 1.5px rgba(255,255,255,1), 2.5px 2.5px rgba(255,255,255,1), 3.5px 3.5px rgba(255,255,255,1), 4.5px 4.5px rgba(255,255,255,1)'
		}
	},
	variants: {},
	plugins: [typography]
};
export default windiConfig;
