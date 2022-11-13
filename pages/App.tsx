import Image from 'next/image'
import styles from './styles'
import { navbar, hero, stats, business, billing, carddeal, testimonials, clients, cta, footer, } from './components<'/>



const Home = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>

      <div className='{`${styles.paddingX}`} ${styles.flexCenter}'>
        <div className='{`${styles.boxwidth}`}'>
          <navbar />
        </div>
      </div>

      <div className='{`bg-primary ${styles.flexStart} `}'>
        <div className='{ `${styles.boxwidth}` }'>
          <hero />
        </div>
      </div>

      <div className='{`bg-primary ${styles.flexStart} ${styles.paddingX} `}'>
        <div className='{ `${styles.boxwidth}` }'>
          <stats />
          <business />
          <billing />
          <carddeal />
          <testimonials />
          <clients />
          <cta />
          <footer />
        </div>
      </div>
    </div>

  )
}

export default Home
