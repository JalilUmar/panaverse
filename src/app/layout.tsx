
"use client"
// import './globals.css'
// import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Inter } from 'next/font/google'
import {ChakraProvider} from '@chakra-ui/react'
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

const inter = Inter({ subsets: ['latin'] })
 const metadata = {
  title: 'Panaverse',
  description: 'Revolutionalizing Pakistan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Panaverse-Revolutionalizing Pakistan</title>
        <link rel="icon" href="@/public/favicon.ico" type="image" />
      </head>
      <body className={inter.className}>
        <ChakraProvider>
          <Header/>
          
          {children}
          <Footer/>
        </ChakraProvider>
      </body>
    </html>
  )
}
