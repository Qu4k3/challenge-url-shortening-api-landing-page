export function Shortener() {

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = event.target.url.value;
    console.log(`URL: ${url}`);
    
    event.target.reset();
  }

  return (
    <section className='container shortener'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <input
            type='url'
            name='url'
            placeholder='Shorten a link here...'
            pattern='https://.*'
            size='40'
            required
          />
          <button type='submit' className='btn btn--big'>Shorten It!</button>
        </form>
      </div>
    </section>
  )
}