import { Head, Html, Main, NextScript } from 'next/document'
import { mediaStyles } from '@app/shared/ui/media'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{ __html: mediaStyles }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
