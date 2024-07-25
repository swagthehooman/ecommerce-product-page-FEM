/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'orange':'hsl(26, 100%, 55%)',
        'pale-orange':'hsl(25, 100%, 94%)',
        'neutral-dark-blue':'hsl(220, 13%, 13%)',
        'neutral-dark-gray-blue':'hsl(219, 9%, 45%)',
        'neutral-grey-blue':'hsl(220, 14%, 75%)',
        'neutral-light-grey-blue':'hsl(223, 64%, 98%)',
        'neutral-white':'hsl(0, 0%, 100%)',
        'neutral-black':'hsl(0, 0%, 0%)',
        'attribution':'hsl(228, 45%, 44%)'
      },
      fontFamily:{
        'KumbhSans':['Kumbh Sans','sans-serif']
      }
    },
  },
  plugins: [],
}