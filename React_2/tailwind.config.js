/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], /* 실제 쓰는 css 클래스만 추출하기위해 범위지정 */
  theme: {
    extend: {
      colors: {
        'regal-blue' : '#243c5a'
      }
    },
  },
  plugins: [],
}

