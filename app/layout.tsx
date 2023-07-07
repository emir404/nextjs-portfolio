import './globals.css'
import { Inter } from 'next/font/google'

const font = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Emir Ayaz - Software Engineer',
  description: 'I\'m a software engineer based in Sakarya, Turkey. I\'m currently working freelance and looking for new opportunities.'
}

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className='w-screen h-screen flex justify-center'>
          {children}
        </div>
      </body>
    </html>
  )
}