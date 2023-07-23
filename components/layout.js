import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const siteTitle = 'Restaurant Demo App';

export default function Layout({ children }) {
  return (
    <div className={inter.className}>{children}</div>
  )
}
