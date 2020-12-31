import Head from 'next/head'

import Container from '../components/Layout/Container'
import NavigationHeader from '../components/Navigation/Navigation.Header'
import Reset from '../components/Reset'
import { css } from '../stitches.config'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
css.global(Reset)

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <NavigationHeader />
      </Container>
    </>
  )
}
