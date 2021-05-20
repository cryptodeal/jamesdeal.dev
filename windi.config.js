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
              color: '#991b1b',
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
        dark: {
          css: {
            color: '#e4e4e7',
            a: {
              textDecoration: 'underline',
              color: '#4ade80',
              '&:hover': {
                color: '#86efac',
              },
            },
            h1: {
              color: '#4ade80',
            },
            h2: {
              color: '#4ade80',
            },
            h3: {
              color: '#4ade80',
            },
            h4: {
              color: '#4ade80',
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
	variants: {
    extend: {
      typography: ['dark']
    }
  },
	plugins: [typography]
};
export default windiConfig;
