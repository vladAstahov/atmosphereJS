import React from "react";
import './globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Атмосфера',
  description: 'Глэмпинг Атмосфера. Всё что Вы увидите и к чему прикоснетесь, сделано с душой и от чистого сердца, для каждого из нас.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
