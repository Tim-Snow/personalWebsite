import React from 'react'

const HeaderLink = ({name}) => (
    <div style={styles.container}>
        {name}
    </div>
)

const styles = {
    container: {
        backgroundColor: '#fff', 
        margin: 4, 
        padding: 3, 
        borderRadius: 5, 
        border: '1px solid black', 
        textAlign: 'center', 
        display: 'block'
    }
}

export default HeaderLink
