import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import Header from './Component'

configure({ adapter: new Adapter() })

const defaultProps = {
  home: () => undefined,
  about: () => undefined,
  contact: () => undefined,
  portfolio: () => undefined,
  toggle: () => undefined,
  setLargeScreen: () => undefined,
  setSmallScreen: () => undefined,
  type: 'reg',
  view: 'about',
  largeScreen: true,
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
