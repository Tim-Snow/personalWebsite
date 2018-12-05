import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import App from './App'

configure({ adapter: new Adapter() })

describe('App', () => {
  it('should match the snapshot', () => {
    const app = shallow(<App />)
    expect(app).toMatchSnapshot()
  })
})
