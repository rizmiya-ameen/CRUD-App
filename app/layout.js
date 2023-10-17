import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import BookmarksList from '@/components/BookmarksList'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto p-4">
          <NavBar />
          <div className="mt-8">
            {children}
          </div>
          
        </div>
      </body>
    </html>
  )
}
