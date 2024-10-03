import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm':{'min': '360px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'xl': {'min': '1024px', 'max': '1280px'},
      '2xl': {'min': '1280px'},
    },
    fontSize:{
      xs: ['14px', '22px'],
      sm: ['18px', '22px'],
      base: ['16px', '20px'],
      md: ['20px', '24px'],
      lg: ['22px', '26px'],
      'lg-2':['24px','28px'],
      xl: ['26px', '32px'],
      'xl-2':['24px','32px'],
      'xl-3' :['28px','34px'],
    },
    extend: {
      boxShadow: {
        'custom-button-shadow': '0px 18px 40px -12px rgba(62, 189, 255, 0.45)',
        'dot-shadow':'0px 18px 40px -12px #FF75B759',
        'resource-card':' 0px 2px 8px 0px #136A9B26',
        'exam-card': '0px 4px 40px 0px #00000040',
      },
      backgroundImage: {
        'custom-gradient-button': 'linear-gradient(95.34deg, #FF6E14 0%, rgba(255, 142, 0, 0.7) 100%)',
        'avatar-1': "url('/static/avatar-1.png')",
        'avatar-2': "url('/static/avatar-2.png')",
      },
      colors: {
        white : '#fff',
        'orange-60':'#FF6E14',
        "text-color" :'#2C2C2C',
        'text-gray':'#979797',
        'gray-90':'#333333',
        'gray-60': '#9E9E9E',
        'gray-30':'#3E3E3E',
        'raging-leaf':'#DC5400',
        'white-secondary':'#EAEAEA80',
        'orange-300' :'rgba(255, 110, 20, 0.7)',
        'orange-500' :'#DC5400',
        'blue-500':'#3EBDFF'

      },
      borderRadius:{
        xs :'10px',
        sm:'15px',
        md : '20px'
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
export default config;
