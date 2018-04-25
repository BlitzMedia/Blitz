import styled, { css, injectGlobal } from 'react-emotion'
import Shevy from 'shevyjs'

injectGlobal`
  a, a:visited { color: inherit; }
`

// https://emotion.sh/docs/emotion-theming

const shevyOptions = {
  baseFontSize: '32px',
  baseLineHeight: 1.5,
  baseFontScale: [5.653, 3.998, 2.827, 1.999, 1.414, 1],
  addMarginBottom: true,
  proximity: false,
  proximityFactor: 0.85
}

const shevy = new Shevy(shevyOptions)
console.log(shevy)

const {
  baseSpacing: bs,
  lineHeightSpacing: lhs,
  h1: {
    fontSize: fontSizeH1,
    lineHeight: lineHeightH1
  },
  h2: {
    fontSize: fontSizeH2,
    lineHeight: lineHeightH2
  },
  h3: {
    fontSize: fontSizeH3,
    lineHeight: lineHeightH3
  },
  h4: {
    fontSize: fontSizeH4,
    lineHeight: lineHeightH4
  },
  h5: {
    fontSize: fontSizeH5,
    lineHeight: lineHeightH5
  },
  h6: {
    fontSize: fontSizeH6,
    lineHeight: lineHeightH6
  }
} = shevy

const blitzTheme = {
  colors: {
    blitzGold: 'rgb(176, 151, 109)'
  }
}

export const fullyCentered = css`
	display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`


export const bordered = css`
	display: inline-block;
  border-bottom: 1px solid;
`


export const Blitz = styled('main')`
  width: 100vw;
  height: 100vh;
  background: ${blitzTheme.colors.blitzGold};
  color: white;

  padding: ${bs()};
`

export const Column = styled('section')`
  display: flex;
  flex-direction: column;
`

export const column = css`
	display: flex;
  flex-direction: column;
`

export const Heading = styled('h1')`
  font-size: ${fontSizeH1};
  font-weight: lighter;
  line-height: ${lineHeightH1};
  margin-bottom: ${lhs(.2)};
  letter-spacing: .01em;
`

export const SubHeading = styled('h4')`
  font-size: ${fontSizeH4};
  font-weight: lighter;
  line-height: ${lineHeightH4};
  margin-bottom: ${lhs(.2)};
  letter-spacing: .01em;
  text-transform: uppercase;
`

export const Nav = styled('nav')`
  * + * { margin-left: ${bs(.5)} }
  display: flex;
  align-items: center;
  justify-content: center;
`
