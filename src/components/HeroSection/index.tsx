import { HeroBackground, HeroContainer, HeroContent, HeroP, HeroTitle } from "./styles"

import Background from '../../assets/images/background-home.jpg'
import Button from "../Button"


const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBackground src={Background} alt='imagemde fundo' />

      <HeroContent>
        <HeroTitle>Your imagination is <br /> Your only limit</HeroTitle>

        <HeroP>We always try to make our customer Happy. We provide all kind of facilities. <br />
        Your Satisfaction is our main priority</HeroP>

        <Button text='Discouver more' />
      </HeroContent>

      
    </HeroContainer>
  )
}

export default HeroSection