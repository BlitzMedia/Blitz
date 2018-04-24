import styled, { css } from 'react-emotion'
import Shevy from 'shevyjs'

const shevyOptions = {
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  baseFontScale: [5.653, 3.998, 2.827, 1.999, 1.414, 1],
  addMarginBottom: true,
  proximity: false,
  proximityFactor: 0.85
}

const shevy = new Shevy(shevyOptions)

const {
  baseSpacing: bs,
  h1: {
    fontSize,
    lineHeight,
    marginBottom
  }
} = shevy

export const Wrap = styled('div')`
  padding: ${bs()};
  margin-bottom: ${bs(2)};
`

export const Heading = styled('h1')`
  font-size: ${fontSize};
  line-height: ${lineHeight};
  margin-bottom: ${marginBottom};
`
