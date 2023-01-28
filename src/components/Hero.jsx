import Illustration from '../assets/illustration-working.svg';

export function Hero() {

  return (
    <section className="container hero">
      <div className='wrapper'>
        <div>
          <h1>More than just shorter links</h1>
          <p className='hero__subtitle'>Build your brand’s recognition and get detailed insights 
    on how your links are performing.</p>
          <a className='btn btn--big' href="#">Get Started</a>
        </div>
        <div>
          <img src={Illustration} alt="Illustration working" />
        </div>
      </div>      
    </section>
  )
}