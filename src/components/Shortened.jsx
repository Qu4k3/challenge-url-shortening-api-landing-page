export function Shortened({ originalLink, shortLink }) {

  const resetCopied = () => {
    document.querySelectorAll('.copied').forEach(btn => {
      btn.innerText = 'Copy';
      btn.classList.remove('copied')
    })
  }

  const handleCopyToClipboard = (event) => {
    navigator.clipboard.writeText(event.target.dataset.copy);
    resetCopied()
    event.target.className += ' copied';
    event.target.innerText = 'Copied!';
  }
  
  return (
    <div className='shortened'>
      <span className='original-link'>{originalLink}</span>
      <a href={shortLink} alt='Short URL' target='_blank' rel='noopener noreferrer'>{shortLink}</a>
      <button data-copy={shortLink} onClick={event => handleCopyToClipboard(event)} className='btn'>Copy</button>
    </div>   
  )
}