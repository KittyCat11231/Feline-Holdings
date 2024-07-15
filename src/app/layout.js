'use client'
 
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
                <div id='page-container'>
                    <div id='container-wrap'>
                        <Header />
                        <div id="root">{children}</div>
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    )
}