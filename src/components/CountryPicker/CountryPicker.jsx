import React, {useState, useEffect} from 'react'

import {NativeSelect, FormControl, Typography} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api'

const CountryPicker = ({handleCountryChange}) =>{ 
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(()=>{
        const fetchAPI = async () =>{
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    },[setFetchedCountries])

  
    return(
        
        <FormControl className={styles.formControl}>
            <Typography className={styles.CountryTitle}>Voir par pays :</Typography>
            <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)} className={styles.SelectMain}>
                
                <option> Monde entier</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}> {country} </option> )}
            </NativeSelect>
        </FormControl>
    )
}


export default CountryPicker