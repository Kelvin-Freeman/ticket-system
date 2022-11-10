import React from "react";
import {Header} from '../../../Ticket-System/src/layout/partials/Header.comp'
import {Footer} from '../../../Ticket-System/src/layout/partials/Footer.comp'

export const DefaultLayout = () => {
    return(
        <div>
            <Header />
                main page content
            <Footer />
        </div>
    )
}