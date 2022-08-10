import {quotes} from '../resources/data'


// const addQuote = (quote, author) => quotes.push(quote, source);

export const randomQuoteChooser = () => {
    // generate random number of length quotes array
    const index = Math.round(Math.random() * quotes.length);
    // return random quote
    const quoteAsArray = quotes.at(index);
    return quoteAsArray;
}

