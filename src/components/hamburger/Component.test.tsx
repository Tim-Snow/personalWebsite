import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import Hamburger from './index'

configure({ adapter: new Adapter() })

describe('hamburger', () => {
  it('should match the snapshot', () => {
    const hamburger = shallow(<Hamburger />)
    expect(hamburger).toMatchSnapshot()
  })
})
