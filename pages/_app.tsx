import '@fontsource/acme'
import '@fontsource/fira-mono'
import '@app/shared/ui/globals.css'
import { Provider } from 'effector-react/scope'
import type { AppProps } from 'next/app'
import App from 'next/app'
import { withEffector } from 'nextjs-effector'
import { MediaContextProvider } from '@app/shared/ui/media'

const withMedia = (App: any) =>
  function EnhancedApp(props: AppProps) {
    return (
      <MediaContextProvider>
        <App {...props} />
      </MediaContextProvider>
    )
  }

export default withMedia(withEffector(App, { Provider }))
