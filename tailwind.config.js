/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './public/index.html',
        './public/**/*.{html,js}',
        './src/**/*.{html,js}'
    ],
    theme: {
        extend: {
            colors: {
                red: {
                    accent: {
                        500: 'hsl(12, 60%, 45%)',
                        400: 'hsl(12 88% 59%)',
                        300: 'hsl(12,88%,75%)',
                        100: 'hsl(13, 100%, 96%)'
                    }
                },
                blue: {
                    primary: 'hsl(228, 39%, 23%)',
                    neutral: 'hsl(232, 12%, 13%)'

                },
                gray: {
                    light: 'hsl(0, 0%, 98%)'
                }

            },
            fontFamily: {
                body: ['Be Vietnam Pro', 'sans'],
            }
        },
    },
    plugins: [],
}