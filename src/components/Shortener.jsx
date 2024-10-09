import { useEffect, useState } from 'react';
import { Shortened } from './Shortened';
import { encurtadorShortener } from '../services/encurtador';

export function Shortener() {
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [invalidInput, setInvalidInput] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsFetching(true)
    setError(null)
    setInvalidInput(false)
    const url = event.target.url.value;

    try {
      const data = await encurtadorShortener(url);
      updateLocalStorageSetState(url, data);
      event.target.reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsFetching(false);
    }
  }

  const updateLocalStorageSetState = (url, data) => {
    let shortenedUrls = JSON.parse(localStorage.getItem('shortenedUrls')) || [];

    let shortUrl = data.urlEncurtada  // data.result_url // (cleanuri)
  
    if (!shortUrl.startsWith('http://') && !shortUrl.startsWith('https://')) {
      shortUrl = 'https://' + shortUrl
    }

    const formatedItem = {
      'original_link': url,
      'full_short_link': shortUrl
    }

    const urlAlreadyShortened = shortenedUrls.some(item => item.original_link === url);

    if (!urlAlreadyShortened) {
      shortenedUrls.push(formatedItem);
      localStorage.setItem('shortenedUrls', JSON.stringify(shortenedUrls));
      setShortenedUrls(shortenedUrls);
    } else {
      setError(`${url} has already been shortened.`);
    }
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
          { invalidInput && <p className='invalid-message'>Please add a valid link</p> }
          { error && !invalidInput && <p className='invalid-message'>{error}</p> }
          <button
            type='submit'
            className='btn btn--big'
            disabled={isFetching}
          >
            {isFetching ? "In progress": "Shorten It!"}
          </button>
        </form>
      </section>
      <section className='wrapper wrapper__shortened'>
        {
          shortenedUrls.map((shortened, i) =>
            <Shortened
              key={shortened.code + '-' + i}
              originalLink={shortened.original_link}
              shortLink={shortened.full_short_link}
            />)
        }
      </section>
    </section>
  )
}