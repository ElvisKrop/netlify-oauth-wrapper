import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { InitMockComponent } from '../src'

const App: React.FC = () => {
  return (
    <div>
      <InitMockComponent />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
