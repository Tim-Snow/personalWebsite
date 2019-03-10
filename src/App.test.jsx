import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16.3'

beforeAll(() => {
  Enzyme.configure({ adapter: new Adapter() })
})

it('looks sick', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
  expect(shallow(<App />)).toMatchSnapshot()
})
