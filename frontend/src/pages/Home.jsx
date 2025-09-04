import Carousel from '../components/Carousel'
import MidBanner from '../components/MidBanner'
import Features from '../components/Features'
import PromotionalBanner from '../components/PromotionalBanner'
import StatsSection from '../components/StatsSection'
import TestimonialsSection from '../components/TestimonialsSection'

const Home = () => {

  return (
    <div className='overflow-x-hidden'>
      <Carousel />
      <PromotionalBanner />
      <MidBanner />
      <Features />
      <StatsSection />
      <TestimonialsSection />
    </div>
  )
}

export default Home
