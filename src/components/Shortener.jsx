import { useEffect, useState } from 'react';
import { shrtcodeShortener } from '../services/shrtcode';
import { Shortened } from './Shortened';

export function Shortener() {
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [invalidInput, setInvalidInput] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    setInvalidInput(false)
    const url = event.target.url.value;

    shrtcodeShortener(url)
      .then(data => updateLocalStorageSetState(data))

    event.target.reset();
  }

  const updateLocalStorageSetState = (json) => {
    const item = json.result;
    let shortenedUrls = JSON.parse(localStorage.getItem('shortenedUrls')) || [];

    const formatedItem = {
      'code': item.code,
      'original_link': item.original_link,
      'full_short_link': item.full_short_link
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
          {
            invalidInput && <p className='invalid-message'>Please add a valid link</p>
          }
          <button type='submit' className='btn btn--big'>Shorten It!</button>
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