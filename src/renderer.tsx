import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Hello from './components/Hello'
import Timer from './components/Timer'

const App: React.FC = () => {
  return (
    <>
      <Timer />
      <Hello lastName="Rimane" />
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
