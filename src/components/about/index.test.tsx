import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import About from './index'

configure({ adapter: new Adapter() })

describe('about', () => {
  it('should match the snapshot', () => {
    const headerlink = shallow(<About />)
    expect(headerlink).toMatchSnapshot()
  })
})
