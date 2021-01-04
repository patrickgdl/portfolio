import React from 'react'
import NextDocument, {
  DocumentContext,
  Html,
  Main,
  NextScript,
  Head,
  DocumentInitialProps,
} from 'next/document'
import { css } from '../stitches.config'

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage

    let extractedStyles: string[] = []
    ctx.renderPage = () => {
      const { styles, result } = css.getStyles(originalRenderPage)
      extractedStyles = styles
      return result
    }

    const initialProps = await NextDocument.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}

          {extractedStyles.map((content, index) => (
            <style key={index} dangerouslySetInnerHTML={{ __html: content }} />
          ))}
        </>
      ),
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
