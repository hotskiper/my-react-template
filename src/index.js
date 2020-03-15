
import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import store from '@/store'
import cssobj from '@/css/test.css'
import App from './App.jsx'

ReactDom.render(<App></App>, document.getElementById('app'))
