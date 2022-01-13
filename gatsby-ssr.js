import React from 'react'

export const onRenderBody = ({setHeadComponents}, pluginOptions) => {
  const {preloaders} = pluginOptions
  
  if (!preloaders) {
    throw new Error('option "preloaders" is required')
  }

  if (preloaders.some(p => !p.href || !p.as)) {
    throw new Error('each preloader must have "href" and "as" attributes')
  }

  setHeadComponents(
      preloaders.map(preloader =>
          React.createElement('link', {
            rel: 'preload',
            key: preloader.href,
            ...preloader,
          })
      )
  )
}
