import React from "react";
import {Header} from '../../../Ticket-System/src/layout/partials/Header.comp'
import {Footer} from '../../../Ticket-System/src/layout/partials/Footer.comp'

export const DefaultLayout = () => {
    return(
        <div className="default-layout">
            <header className="header">
                <Header />
            </header>
                <main className="main">
                    main page content
                </main>
                <footer className="footer">
                    <Footer />
                </footer>
        </div>
    )
}