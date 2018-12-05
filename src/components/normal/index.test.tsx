import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import Normal from './index'

configure({ adapter: new Adapter() })

describe('normal', () => {
  it('should match the snapshot', () => {
    const headerlink = shallow(<Normal />)
    expect(headerlink).toMatchSnapshot()
  })
})
