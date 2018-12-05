import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import HeaderLink from './index'

configure({ adapter: new Adapter() })

const defaultProps = {
  cb: () => undefined,
  text: 'a',
}

describe('header link', () => {
  it('should match the snapshot', () => {
    const headerlink = shallow(<HeaderLink {...defaultProps} />)
    expect(headerlink).toMatchSnapshot()
  })
})
