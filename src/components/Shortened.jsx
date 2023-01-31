import { useState } from 'react';

export function Shortened({ originalLink, shortLink }) {

  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = (event) => {
    const shortLinkValue = event.target.dataset.copy;
    navigator.clipboard.writeText(shortLinkValue)    
    setCopied(true)
  }
  
  return (
    <div className='shortened'>
      <span className='original-link'>{originalLink}</span>
      <a href={shortLink} alt='Short URL' target="_blank" rel="noopener noreferrer">{shortLink}</a>
      <button data-copy={shortLink} onClick={handleCopyToClipboard} className={`btn${copied ? ' copied' : ''}`}>{copied ? 'Copied!' : 'Copy'}</button>
    </div>   
  )
}