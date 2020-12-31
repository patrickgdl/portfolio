import Link from 'next/link'

import { styled } from '../../stitches.config'
import Logo from '../Logo/Logo'
import Section from '../Section/Section'

const NavContainer = styled('div', {
  position: 'relative',
  zIndex: '100',
  paddingTop: '100px',
  display: 'flex',
  justifyContent: 'space-between',

  desktopMd: {
    paddingTop: '50px',
  },

  tablet: {
    paddingTop: '50px',
  },
})

const LogoLink = styled('a', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  left: 0,

  '&[data-a11y="true"]:focus::after': {
    content: '""',
    position: 'absolute',
    left: '-10%',
    top: '-30%',
    width: '120%',
    height: '160%',
    border: '2px solid ${p => p.theme.colors.accent}',
    background: 'rgba(255, 255, 255, 0.01)',
    borderRadius: '5px',
  },

  ':hover': {
    transform: 'translateX(-3px)',
  },
})

const NavigationHeader: React.FC = () => {
  return (
    <Section>
      <NavContainer>
        <Link href="/">
          <LogoLink
            data-a11y="false"
            title="Navegue até a homepage"
            aria-label="Navegue até a homepage"
          >
            <Logo />
          </LogoLink>
        </Link>
      </NavContainer>
    </Section>
  )
}

export default NavigationHeader
