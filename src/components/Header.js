import React from 'react'
import HeaderLink from './HeaderLink'
import HeaderTitle from './HeaderTitle'

const Header = () => (
    <div style={styles.container}>
        <HeaderTitle />
        <HeaderLink name="Portfolio" />
        <HeaderLink name="About" />
        <HeaderLink name="Contact" />
    </div>
)

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'stretch',
        alignItems: 'center',
        position: 'fixed',
        height: '32px',
        top: 0,
        width: '100%',
        border: '1px solid black',
        backgroundColor: '#ddd',
    },
}

export default Header
