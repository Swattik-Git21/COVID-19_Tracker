import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import classNames from 'classnames';

const Cards = ({data :{confirmed, recovered, deaths, lastUpdate}}) => {
  if(!confirmed)
  {
    return 'Loading...';
  }
    return (
        <div className={styles.container}>
          {/* Infected people... */}
          <Grid container spacing={3} justify="center" >
          <Grid item component={Card} xs={12} md={3} className={classNames(styles.card, styles.infected)}>
          <CardContent>
          <Typography color ="textSecondary" gutterBottom> Infected </Typography>
          <Typography variant="h5"> 
          <CountUp 
          start = {0}
          end ={confirmed.value}
          duration={2.5}
          separator=","
          />
           </Typography>
          <Typography color="textSecondary">{ new Date(lastUpdate).toDateString() }</Typography>
          <Typography variant="body2"> Number of active cases in Covid-19 </Typography>
         </CardContent>
          </Grid>

          {/* Recovered people... */}
          <Grid item component={Card} xs={12} md={3} className={classNames(styles.card, styles.recovered)}>
          <CardContent>
          <Typography color ="textSecondary" gutterBottom> Recovered </Typography>
          <Typography variant="h5"> 
          <CountUp start = {0} end={recovered.value} duration={2.5} separator = "," />
          </Typography>
          <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
          <Typography variant="body2"> Number of recoveries from Covid-19 </Typography>
         </CardContent>
          </Grid>

          {/* Deaths people... */}
          <Grid item component={Card} xs={12} md={3} className={classNames(styles.card, styles.deaths)}>
          <CardContent>
          <Typography color ="textSecondary" gutterBottom> Deaths </Typography>
          <Typography variant="h5"> <CountUp start = {0} end={deaths.value} duration={2.5} separator = "," /> </Typography>
          <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
          <Typography variant="body2"> Number of death caused by Covid-19 </Typography>
         </CardContent>
          </Grid>
          </Grid>     
        </div>
    )
}


export default Cards;
