import { styled } from '../../stitches.config'

const Section = styled('section', {
  width: '100%',
  maxWidth: '1220px',
  margin: '0 auto',
  padding: '0 4rem',

  desktop: {
    maxWidth: '850px',
  },

  tablet: {
    padding: '0 2rem',
    maxWidth: '527px',
  },

  phablet: {
    maxWidth: '100%',
  },
})

export default Section
