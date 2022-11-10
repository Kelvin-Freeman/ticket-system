import React from "react";
import {Header} from '../../../Ticket-System/src/layout/partials/Header.comp'
import {Footer} from '../../../Ticket-System/src/layout/partials/Footer.comp'

export const DefaultLayout = ({children}) => {
    return(
        <div className="default-layout">
            <header className="header">
                <Header />
            </header>
                <main className="main">
                    {children}
                </main>
                <footer className="footer">
                    <Footer />
                </footer>
        </div>
    )
}