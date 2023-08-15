"use client"

import React from "react"
import {
    Header,
    Main as MainSection,
    Ideas,
    Reasons,
    // Rooms,
    Booking,
    Benefits,
    Certificate,
    Reviews,
    Contacts,
    Footer
} from "./sections"

const Rooms = React.lazy(() => import('./sections/Rooms/Rooms'))

export const Main = () => {
    return <>
        <Header />
        <MainSection />
        <Ideas />
        <Reasons />
        <Rooms />
        <Booking />
        <Benefits />
        <Certificate />
        <Reviews />
        <Contacts />
        <Footer />
    </>
}