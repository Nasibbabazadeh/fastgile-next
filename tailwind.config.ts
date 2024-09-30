import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize:{
      xs: ['14px', '22px'],
      sm: ['18px', '22px'],
      base: ['16px', '20px'],
      md: ['20px', '24px'],
      lg: ['22px', '26px'],
      'lg-2':['24px','28px'],
      xl: ['26px', '32px'],
      xxl:['24px','32px'],
    },
    extend: {
      colors: {
        white : '#fff',
        orange : '#DC5400',
        'orange-60':'#FF6E14',
        "text-color" :'#2C2C2C',
        'text-gray':'#979797',
        'gray-60': '#9E9E9E',
        'gray-30':'#3E3E3E'
      },
      borderRadius:{
        xs :'10px',
        sm:'15px',
        md : '20px'
      },
      backgroundImage:{
        'avatar-1': "url('/static/avatar-1.png')",
        'avatar-2': "url('/static/avatar-2.png')",
      }
    },
  },
  plugins: [],
};
export default config;
