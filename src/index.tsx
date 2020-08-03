import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import { Board } from './components/board'

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(https://i.imgur.com/q43yjB2.jpg);
  }
`


const Page = () => (<>
  <Board />
  <GlobalStyle />
</>)

ReactDOM.render(<Page />, document.getElementById('root'))
