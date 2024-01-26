/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
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
