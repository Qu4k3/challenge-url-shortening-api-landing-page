import { useEffect, useState } from "react";
import { shrtcodeShortener } from "../services/shrtcode";
import { Shortened } from "./Shortened";

export function Shortener() {
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [invalidInput, setInvalidInput] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault();
    setInvalidInput(false)
    const url = event.target.url.value;

    shrtcodeShortener(url)
      .then(data => updateLocalStorageSetState(data))

    event.target.reset();
  }

  const updateLocalStorageSetState = (json) => {
    const item = json.result;
    let shortenedUrls = localStorage.getItem('shortenedUrls');
    let shortenedUrlsArray = [];

    const formatedItem = {
      'code': item.code,
      'original_link': item.original_link,
      'short_link': item.short_link
    }
    
    if (shortenedUrls) {
      shortenedUrlsArray = JSON.parse(shortenedUrls);
    }

    shortenedUrlsArray.push(formatedItem);
    localStorage.setItem('shortenedUrls', JSON.stringify(shortenedUrlsArray));

    setShortenedUrls(shortenedUrlsArray);
  }

  const checkLocalStorageSetState = () => {
    let shortenedUrls = localStorage.getItem('shortenedUrls');

    if (shortenedUrls) {
      setShortenedUrls(JSON.parse(shortenedUrls));
    }
  }

  useEffect(() => {
    checkLocalStorageSetState()
  }, [])

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

          shortenedUrls.map((shortened, i) =>
            <Shortened
              key={shortened.code + '-' + i}
              originalLink={shortened.original_link}
              shortLink={shortened.short_link}
            />)
        }
      </section>
    </section>
  )
}