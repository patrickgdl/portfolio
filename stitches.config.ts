import { createStyled } from '@stitches/react'

const theme = {
  colors: {
    $hiContrast: 'hsl(206,10%,5%)',
    $loContrast: 'white',

    $gray100: 'hsl(206,22%,99%)',
    $gray200: 'hsl(206,12%,97%)',
    $gray300: 'hsl(206,11%,92%)',
    $gray400: 'hsl(206,10%,84%)',
    $gray500: 'hsl(206,10%,76%)',
    $gray600: 'hsl(206,10%,44%)',

    $purple100: 'hsl(252,100%,99%)',
    $purple200: 'hsl(252,100%,98%)',
    $purple300: 'hsl(252,100%,94%)',
    $purple400: 'hsl(252,75%,84%)',
    $purple500: 'hsl(252,78%,60%)',
    $purple600: 'hsl(252,80%,53%)',
  },
  space: {
    $1: '5px',
    $2: '10px',
    $3: '15px',
    $4: '20px',
    $5: '25px',
    $6: '35px',
  },
  sizes: {
    $1: '5px',
    $2: '10px',
    $3: '15px',
    $4: '20px',
    $5: '25px',
    $6: '35px',
  },
  fontSizes: {
    $1: '12px',
    $2: '13px',
    $3: '15px',
    $4: '17px',
    $5: '19px',
    $6: '21px',
  },
  fonts: {
    $system: 'system-ui',
  },
}

export const { styled, css } = createStyled({
  tokens: theme,
  utils: {
    marginX: () => (value: keyof typeof theme['space'] | (string & unknown)) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: () => (value: keyof typeof theme['space'] | (string & unknown)) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: () => (value: keyof typeof theme['space'] | (string & unknown)) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: () => (value: keyof typeof theme['space'] | (string & unknown)) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  breakpoints: {
    phoneSm: (rule) => `@media (min-width: 320px) { ${rule} }`,
    phone: (rule) => `@media (min-width: 376px) { ${rule} }`,
    phablet: (rule) => `@media (min-width: 540px) { ${rule} }`,
    tablet: (rule) => `@media (min-width: 735px) { ${rule} }`,
    desktopMd: (rule) => `@media (min-width: 1070px) { ${rule} }`,
    desktopLg: (rule) => `@media (min-width: 1440px) { ${rule} }`,
  },
})
