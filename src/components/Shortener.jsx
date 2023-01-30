import { useEffect, useState } from "react";
import { shrtcodeShortener } from "../services/shrtcode";
import { Shortened } from "./Shortened";

export function Shortener() {
  const [shortenedUrls, setShortenedUrls] = useState([
    {
      'code': '8pv6vG',
      'original_link': 'https://www.frontendmentor.io/',
      'short_link': 'https://shrtco.de/8pv6vG'
    },
    {
      'code': 'tEW36m',
      'original_link': 'https://twitter.com/frontendmentor',
      'short_link': 'https://shrtco.de/tEW36m'
    }
  ]);
  const [invalidInput, setInvalidInput] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)

    const url = event.target.url.value;
    console.log(`URL: ${url}`);

    shrtcodeShortener(url).then(data => console.log('shrtcodeShortener:', data))

    event.target.reset();
  }

  const checkLocalStorage = () => {

    // Put the object into storage
    localStorage.setItem('shortened', JSON.stringify(shortenedUrls));

    // Retrieve the object from storage
    var shortenedUrls = localStorage.getItem('shortened');

    setShortenedUrls(JSON.parse(shortenedUrls));
  }

  /*useEffect(() => {
    return checkLocalStorage()
  }, [])*/

  return (
    <section className='container shortener'>
      <section className='wrapper wrapper__form'>
        <form onSubmit={handleSubmit}>
          <input
            type='url'
            name='url'
            placeholder='Shorten a link here...'
            pattern='https?://.*'
            size='40'
            className={invalidInput ? 'invalid' : ''}
            onInvalid={() => { setInvalidInput(true) }}
            // onValid={() => {setInvalidInput(false)}}
            required
          />
          {
            invalidInput && <p className="invalid-message">Please add a valid link</p>
          }
          <button type='submit' className='btn btn--big'>Shorten It!</button>
        </form>
      </section>
      <section className="wrapper wrapper__shortened">
        {
          /*shortenedUrls.length > 0
          && */

          shortenedUrls.map(
            (shortened) => <Shortened
              key={shortened.code}
              originalLink={shortened.original_link}
              shortLink={shortened.short_link}
            />)
        }
      </section>
    </section>
  )
}