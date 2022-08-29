// Import React
import React from "react";

// Import Components
import "../Prices/Prices.scss";
import Container from "../Container/Container";
import Brend from "../Brend/Brend";

function Prices() {
    return (
        <>
            <Container>
                <section className="prices">
                    <Brend />
                    <h2 className="proces__title">Цены на услуги</h2>
                    
                </section>
            </Container>
        </>
    )
}

export default Prices