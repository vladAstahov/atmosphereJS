import React from "react";
import './globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Атмосфера',
  description: 'Глэмпинг «Атмосфера» - это аутентичный способ соединиться с природой, при этом, соблюсти все условия комфорта городского жителя. Улучшенные номера оснащены всем необходимым и даже чуть больше.',
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
