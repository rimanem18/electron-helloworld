import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Hello from './components/Hello'

const App: React.FC = () => {
  return <Hello />
}

ReactDOM.render(<App />, document.querySelector('#root'))
