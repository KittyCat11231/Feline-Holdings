import '../index.css';

export const metadata = {
    title: 'Feline Holdings',
    description: 'The official website of Feline Holdings on the MRT server.'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="https://svgshare.com/i/16GU" />
            </head>
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    )
}