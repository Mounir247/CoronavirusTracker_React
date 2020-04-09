import React from 'react'
import {Typography} from '@material-ui/core'
import styles from './Footer.module.css'



class Footer extends React.Component{
    render() {
        return (
            <div className={styles.FooterContainer}>
                <Typography variant="body2">Developed and Created by <a href="https://github.com/Mounir247" rel="noopener noreferrer"  target="_blank">  Mounir Laskri </a></Typography>
            </div>
        )
    }
}

export default Footer