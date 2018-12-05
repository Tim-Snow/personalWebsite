import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import Header from './Component'

configure({ adapter: new Adapter() })

const defaultProps = {
  normal: () => undefined,
  game: () => undefined,
  about: () => undefined,
  contact: () => undefined,
  portfolio: () => undefined,
  type: 'reg',
  view: 'about',
}

describe('header', () => {
  beforeEach(() => {
    window.addEventListener = jest.fn()
  })

  it('should match the snapshot', () => {
    const header = shallow(<Header {...defaultProps} />)
    expect(header).toMatchSnapshot()
  })
})
