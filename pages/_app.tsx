// // global styles shared across the entire site
// import * as React from 'react'
// import type { AppProps } from 'next/app'
// import { useRouter } from 'next/router'

// import * as Fathom from 'fathom-client'
// // used for rendering equations (optional)
// import 'katex/dist/katex.min.css'
// import posthog from 'posthog-js'
// // used for code syntax highlighting (optional)
// import 'prismjs/themes/prism-coy.css'
// // core styles shared by all of react-notion-x (required)
// import 'react-notion-x/src/styles.css'
// import 'styles/global.css'
// // this might be better for dark mode
// // import 'prismjs/themes/prism-okaidia.css'
// // global style overrides for notion
// import 'styles/notion.css'
// // global style overrides for prism theme (optional)
// import 'styles/prism-theme.css'

// import { bootstrap } from '@/lib/bootstrap-client'
// import {
//   fathomConfig,
//   fathomId,
//   isServer,
//   posthogConfig,
//   posthogId
// } from '@/lib/config'

// if (!isServer) {
//   bootstrap()
// }

// export default function App({ Component, pageProps }: AppProps) {
//   const router = useRouter()

//   React.useEffect(() => {
//     function onRouteChangeComplete() {
//       if (fathomId) {
//         Fathom.trackPageview()
//       }

//       if (posthogId) {
//         posthog.capture('$pageview')
//       }
//     }

//     if (fathomId) {
//       Fathom.load(fathomId, fathomConfig)
//     }

//     if (posthogId) {
//       posthog.init(posthogId, posthogConfig)
//     }

//     router.events.on('routeChangeComplete', onRouteChangeComplete)

//     return () => {
//       router.events.off('routeChangeComplete', onRouteChangeComplete)
//     }
//   }, [router.events])

//   return <Component {...pageProps} />
// }

// global styles shared across the entire site
import * as React from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import * as Fathom from 'fathom-client'
// used for rendering equations (optional)
import 'katex/dist/katex.min.css'
import posthog from 'posthog-js'
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-coy.css'
// import '../components/src/styles/portfolio.css'
// import '../components/src/styles/socialIcons.css'
// import '../components/src/styles/themetoggle.css'
import AnimatedCursor from 'react-animated-cursor'
////////
////////
import 'styles/global.css'
// this might be better for dark mode
// import 'prismjs/themes/prism-okaidia.css'
// global style overrides for notion
import 'styles/notion.css'
////////
////////
// core styles shared by all of react-notion-x (required)
// import 'react-notion-x/src/styles.css'
import 'styles/notionx.css'
// global style overrides for prism theme (optional)
import 'styles/prism-theme.css'

import { bootstrap } from '@/lib/bootstrap-client'
import {
  fathomConfig,
  fathomId,
  isServer,
  posthogConfig,
  posthogId
} from '@/lib/config'

// //
// import '../components/src/styles/about.css'
// import '../components/src/styles/contact.css'
// import '../components/src/styles/header.css'
// import '../styles/home.css'

// import { tr } from 'date-fns/locale'
// pages/_app.js

// import { Marcellus ,Raleway } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
// const inter = Inter({ subsets: ['latin'] })
// const marcellus = Marcellus({weight : '400' ,
// variable: '--font-marcellus',
// })
// const raleway = Raleway({weight : ['400' , '500'],
// variable: '--font-raleway',})

if (!isServer) {
  bootstrap()
}

export default function App({ Component, pageProps }: AppProps) {
  const [cursor, setCursor] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    function onRouteChangeComplete() {
      if (fathomId) {
        Fathom.trackPageview()
      }

      if (posthogId) {
        posthog.capture('$pageview')
      }
    }

    if (fathomId) {
      Fathom.load(fathomId, fathomConfig)
    }

    if (posthogId) {
      posthog.init(posthogId, posthogConfig)
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router.events])

  React.useEffect(() => {
    if (typeof window === undefined) {
      setCursor(false)
    } else {
      setCursor(true)
    }
  }, [typeof window])

  return (
    <main>
      {cursor ? (
        <div className='cursor__dot'>
          <AnimatedCursor
            innerSize={15}
            outerSize={15}
            // color='255, 255 ,255'
            color='0 , 0  ,0 '
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={5}
          />
        </div>
      ) : (
        ''
      )}
      <Component {...pageProps} />
    </main>
  )
}
