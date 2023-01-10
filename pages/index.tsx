import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import Header from '../Components/Header/Header'
import Sojib from '../Components/Sojib'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     
      <Sojib></Sojib>
    </>

  )
}
