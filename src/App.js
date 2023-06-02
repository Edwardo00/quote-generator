import { React, useState, useEffect } from 'react'
import './App.css'

const getRandomQuote = (quotes) => {
    return(
        quotes[Math.floor(Math.random() * quotes.length)]
    )
}

const App = () => {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        fetch("https://type.fit/api/quotes")
          .then((res) => res.json())
          .then((json) => {
            setQuotes(json);
            setQuote(json[0]);
          });
      }, []);

    const getNewQuote = () => {
        return(
            setQuote(getRandomQuote(quotes))
        )
    }

  return (
    <div className='gradient__bg'>
        <h1>Quote Generator</h1>
        <div className='quote-box'>
            <button onClick={getNewQuote}>New Quote</button>
            <h3>
                <span>"</span>
                {quote?.text}
            </h3>
            <i>- {quote?.author}</i>
        </div>
    </div>
  )
}

export default App