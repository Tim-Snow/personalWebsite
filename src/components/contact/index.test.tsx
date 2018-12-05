import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import Contact from './index'

configure({ adapter: new Adapter() })

describe('contact', () => {
  it('should match the snapshot', () => {
    const headerlink = shallow(<Contact />)
    expect(headerlink).toMatchSnapshot()
  })
})
