import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { InitMockComponent } from '../src'

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<InitMockComponent />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
