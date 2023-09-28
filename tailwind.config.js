/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
     },
    },
    screens: {
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1100px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "800px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "500px" },
			// => @media (max-width: 639px) { ... }
		},
  },
  plugins: [],
}


