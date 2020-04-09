import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'
import styles from './Cards.module.css'
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) =>{
    if(!confirmed){
        return 'Loading...';
    }
 

    return(
        <div className={styles.container}>
            <div className={styles.upDate}>
            <Typography >Mise à jour du {new Date(lastUpdate).toLocaleDateString('fr-EG', options)}</Typography>

            </div>

            <Grid container spacing={3} justify="center"> 
            
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                <CardContent>
                    <Typography variant="h6" gutterBottom><strong>infectés</strong></Typography>
                    <Typography variant="h4" style={{color:'#381515'}}>
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                         </Typography>
                    <Typography variant="body2"><strong>Personnes ont été infectées par le Covid-19</strong></Typography>
                </CardContent>

            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                    <Typography variant="h6" gutterBottom><strong>Guéris</strong></Typography>
                    <Typography variant="h4" style={{color:'#381515'}}>
                        <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                         </Typography>
                    <Typography variant="body2"><strong>Personnes ont été guéries du Covid-19</strong></Typography>
                </CardContent>
            </Grid>

            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography variant="h6" gutterBottom><strong>Décés</strong></Typography>
                    <Typography variant="h4" style={{color:'#381515'}}>
                        <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                         </Typography>
                    <Typography variant="body2"><strong>Personnes sont décédées du Covid-19</strong></Typography>
                </CardContent>
            </Grid>

            </Grid>
        </div>
    )
}


export default Cards