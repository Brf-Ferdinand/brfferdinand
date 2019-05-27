import App, { Container } from 'next/app'
import { Global, css } from '@emotion/core'
import Head from 'next/head'

export default class Ferdinand extends App {
  render() {
    const { Component } = this.props
    return (
      <Container>
        <Head>
          <title>Brf Ferdinand Schlyter</title>/
          <meta charset='UTF-8' />
          <meta name='description' content='Aspuddens härligaste BRF' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <link href='https://fonts.googleapis.com/css?family=Raleway:100,400&display=swap' rel='stylesheet' defer />
        </Head>
        <Global
          styles={css`
            body {
              margin: 0;
              padding: 0;
              font-family: 'Raleway', serif;
              font-size: 15px;
            }
            h1 {
              font-size: 42px;
              letter-spacing: -0.5px;
              font-weight: 400;
              margin: 0;
            }
          `}
        />
        <Component />
      </Container>
    )
  }
}
