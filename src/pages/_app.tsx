import { Inter } from 'next/font/google'
import { DataContextProvider } from '@/utils/ContextProvider'

import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: {
  Component: React.ComponentType,
  pageProps: any
}) {
  return (
    <DataContextProvider>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </DataContextProvider>
  )
}
