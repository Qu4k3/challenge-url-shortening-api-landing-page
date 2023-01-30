import { useState } from "react";

export function Shortened({ originalLink, shortLink }) {

const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    const shortLinkValue = document.getElementById("shortLink").value;
    navigator.clipboard.writeText(shortLinkValue)

    setCopied(true)
  }
  
  return (
    <div className="shortened">
      <span className='original-link'>{originalLink}</span>
      <a href={shortLink} alt='Short URL'>{shortLink}</a>
      <button onClick={handleCopyToClipboard} className='btn'>{copied ? 'Copied!' : 'Copy'}</button>
    </div>   
  )
}