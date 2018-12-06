import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import PortfolioItem from './index'

configure({ adapter: new Adapter() })

describe('portfolio item', () => {
  it('should match the snapshot', () => {
    const portfolioItem = shallow(<PortfolioItem />)
    expect(portfolioItem).toMatchSnapshot()
  })
})
