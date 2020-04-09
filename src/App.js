import React from 'react'
import {Cards, Chart, CountryPicker} from './components'
import Footer from './components/Footer/Footer'
import ResponsiveDrawer from './components/NavigationItems/Navbar/Navbar'
import styles from './App.module.css'
import {fetchData} from './api'
import covidImg from './images/covidImg.jpg'
import {Typography} from '@material-ui/core'
class App extends React.Component{
    state = {
        data: {},
        country:'',
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country)=>{
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country: country})

        
    }

    render() {
        const { data, country } = this.state;
        return (
            <div>
                <ResponsiveDrawer/>
            
            <div className={styles.container}>
                
                <img src={covidImg} className={styles.image} alt="COVID-19"/>
               <Cards data={data} />
               <CountryPicker handleCountryChange={this.handleCountryChange}/>
               <Typography variant="h6" className={styles.GraphTitle}>Graphique de Progression :</Typography>
               <Chart data={data} country={country}/>
               <Footer/>
            </div>
            </div>
        )
    }
}


export default App;