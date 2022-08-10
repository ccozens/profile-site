import React from "react";
import { randomQuoteChooser } from "./Quoter";

export default function FunThings() {
    return(
        <section id="FunThings">
            <div className="text-white text-3xl">
                Fun Things
                {randomQuoteChooser}
            </div>
        </section>
    )
}