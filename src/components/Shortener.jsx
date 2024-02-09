import { useEffect, useState } from 'react';
import { cleanuriShortener } from '../services/cleanuri';
import { Shortened } from './Shortened';

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
      const data = await cleanuriShortener(url);
      updateLocalStorageSetState(url, data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsFetching(false);
      event.target.reset();
    }
  }

  const updateLocalStorageSetState = (url, data) => {
    let shortenedUrls = JSON.parse(localStorage.getItem('shortenedUrls')) || [];

    const formatedItem = {
      'original_link': url,
      'full_short_link': data.result_url
    }

    shortenedUrls.push(formatedItem);
    localStorage.setItem('shortenedUrls', JSON.stringify(shortenedUrls));
    setShortenedUrls(shortenedUrls);
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