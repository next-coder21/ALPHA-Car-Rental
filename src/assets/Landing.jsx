import{ React , useState }from 'react'
import LandingHero from './Pages/landinghero/LandingHero'
import Deals from './Pages/LandingDeals/Deals'
import Vehicle from './Pages/Our Vehicles/Vehicle'
import Pricing from './Pages/Pricing/Pricing'
import Review from './Pages/Review/Review3';
import Booking from './Pages/Booking/booking'


function Landing() {
 


  return (
    <>
   <LandingHero />
    <Booking />
    
    <Vehicle />
        <Deals />
        <Review />
        <Pricing />
        
    </>
    
  )
}

export default Landing