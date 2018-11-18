import React from 'react'

import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'

const Content = () => (
    <div style={styles.container}>
        content
        <Portfolio />
        <About />
        <Contact />
    </div>
)

const styles = {
    container: {
        width: '100%',
        height: '100%',
        marginTop: '32px'
    }
}

export default Content
