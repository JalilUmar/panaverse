'use client'

import Syllabus from "@/Components/Syllabus"
import { Teacher } from "../../Components/database"
import Teachers from "@/Components/Teachers"


export default function page() {
  return (
    <>
        <Syllabus/>   
        <Teachers/>
    </>
  )
}
