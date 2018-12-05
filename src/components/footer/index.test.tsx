import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import Footer from './index'

configure({ adapter: new Adapter() })

describe('footer', () => {
  it('should match the snapshot', () => {
    const headerlink = shallow(<Footer />)
    expect(headerlink).toMatchSnapshot()
  })
})
