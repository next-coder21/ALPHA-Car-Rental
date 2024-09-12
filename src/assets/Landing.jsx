import{ React , useState }from 'react'
import LandingHero from './Pages/landinghero/LandingHero'
import Deals from './Pages/LandingDeals/Deals'
import Vehicle from './Pages/Our Vehicles/Vehicle'
import Pricing from './Pages/Pricing/Pricing'
import Review from './Pages/Review/Review3';
import Booking from './Pages/Booking/booking'
import Frequentlyask from './Pages/Faq/frequentlyask'


function Landing() {
 


  return (
    <>
   <LandingHero />
    <Vehicle />
    <Deals />
    <Review />
    <Pricing />
    <Frequentlyask />
        
    </>
    
  )
}

export default Landing