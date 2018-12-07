import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import Game from './index'

configure({ adapter: new Adapter() })

describe('game', () => {
  it('should match the snapshot', () => {
    const game = shallow(<Game />)
    expect(game).toMatchSnapshot()
  })
})
