const features = [
  {
    icon: 'icon-brand-recognition',
    name: 'Brand Recognition',
    description:
      'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
  },
  {
    icon: 'icon-detailed-records',
    name: 'Detailed Records',
    description: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
  },
  {
    icon: 'icon-fully-customizable',
    name: 'Fully Customizable',
    description:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
  }
]

export function Features() {

  return (
    <section className="container features">
      <div className='wrapper'>
        <h3>Advanced Statistics</h3>
        <p>Track how your links are performing across the web with our
          advanced statistics dashboard.</p>

        <div className="features__cards">
          {features.map((feature) => (
            <div key={feature.name} className="card">
              <div>
                <img src={require(`../assets/${feature.icon}.svg`)} alt={feature.icon} />
              </div>
              <h5>{feature.name}</h5>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}