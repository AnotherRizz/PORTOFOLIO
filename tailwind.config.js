/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container:{
      center:true,
      padding:'16px'
      
    },
    
    extend: {
      screens:{
        'xl':'1140px',
      },
      colors:{
        primary :'#6366f1',
      },
     
    },
  },
  plugins: [],
}

