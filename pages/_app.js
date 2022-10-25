import '../styles/globals.css'
import '../styles/override.mudule.scss'
import { Provider } from 'react-redux'
import store from 'controller/redux/store'
import App from 'next/app'
import React from 'react'
import BaseContainer from 'pages/Container'

import HeadSeo from './seoConfig'

class XCreation extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <HeadSeo />
        <BaseContainer >
          <Component {...pageProps} />
        </BaseContainer>
      </Provider>
    )
  }
}

export default XCreation
