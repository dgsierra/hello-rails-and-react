import { Controller } from '@hotwired/stimulus'
import React from 'react'
import App from './components/App.jsx'
import ReactDOM from 'react-dom'

// Connects to data-controller="react"
export default class extends Controller {
  connect () {
    const app = document.getElementById('app')
    console.log('app', app)
    app.innerHTML = 'My Ass is Harry'
    ReactDOM.render(<App />, app)
  }
}
