import { example } from '@/js/example.js'
import '@/styles/main.scss'
import webpackLogo from '@/images/webpack-logo.svg'

const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
heading.textContent = example()

const root = document.querySelector('#root')
root.append(heading, logo)
