import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import styles from './Navbar.module.css';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
const drawerWidth = '20%';
const respWidth = '50%';
const useStyles = makeStyles(theme => ({
  
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:'#334571',
    textAlign:'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:'#fff !important',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'rgb(230, 228, 228)',
    [theme.breakpoints.down('sm')]:{
      width:respWidth
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  
  },
}));






function ResponsiveDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }

const drawer = (
    <div>
      
      <List className={styles.Toolbar}>
      <Typography variant="h5" className={styles.NavTitle}>Liens utiles:</Typography>
      <ListItem button  >
              <Typography variant="h6"  color="inherit">
            <a href="https://www.interieur.gouv.fr/Actualites/L-actu-du-Ministere/Attestation-de-deplacement-et-de-voyage" target="_blank" rel="noopener noreferrer">- Attestation de déplacement </a>
            </Typography>
          </ListItem >
      <ListItem button>
            <Typography variant="h6"  color="inherit">
            <a href="https://www.gouvernement.fr/partage/11468-coronavirus-quel-comportement-adopter" target="_blank" rel="noopener noreferrer">- Gouvernement</a>
            </Typography>
            </ListItem>
          <ListItem button  >
              <Typography variant="h6"  color="inherit">
            <a href="https://solidarites-sante.gouv.fr/soins-et-maladies/maladies/maladies-infectieuses/coronavirus/" target="_blank" rel="noopener noreferrer">- Ministère de la santé </a>
            </Typography>
          </ListItem >
          <ListItem button  >
              <Typography variant="h6"  color="inherit">
            <a href="https://www.interieur.gouv.fr/fr" target="_blank" rel="noopener noreferrer">- Ministère de l'intérieur </a>
            </Typography>
          </ListItem >
          <ListItem button>
            <Typography variant="h6"  color="inherit">
            <a href="https://travail-emploi.gouv.fr/actualites/l-actualite-du-ministere/article/coronavirus-questions-reponses-pour-les-entreprises-et-les-salaries" target="_blank" rel="noopener noreferrer">- Ministère du travail </a>
            </Typography>
            </ListItem>
            <ListItem button  >
              <Typography variant="h6"  color="inherit">
            <a href="https://www.education.gouv.fr/coronavirus-covid-19-informations-et-recommandations-pour-les-etablissements-scolaires-et-les-274253" target="_blank" rel="noopener noreferrer">- Ministère de l'éducation </a>
            </Typography>
          </ListItem >
            <ListItem button>
            <Typography variant="h6"  color="inherit">
            <a href="https://www.diplomatie.gouv.fr/fr/le-ministere-et-son-reseau/actualites-du-ministere/informations-coronavirus-covid-19/" target="_blank" rel="noopener noreferrer">- Ministère des Affaires étrangères </a>
            </Typography>
            </ListItem>
            <ListItem button  >
              <Typography variant="h6"  color="inherit">
            <a href="https://www.ecologique-solidaire.gouv.fr/coronavirus-covid-19-informations-recommandations-mesures-sanitaires" target="_blank" rel="noopener noreferrer">- Ministère de la transition écologique </a>
            </Typography>
          </ListItem >
          <ListItem button>
            <Typography variant="h6"  color="inherit">
            <a href="https://www.iledefrance.ars.sante.fr/coronavirus-covid-19" target="_blank" rel="noopener noreferrer">- A.R.S </a>
            </Typography>
            </ListItem>
          <ListItem button >
          <Typography variant="h6"  color="inherit">
            <a href="https://www.pasteur.fr/fr/centre-medical/fiches-maladies/maladie-covid-19-nouveau-coronavirus" target="_blank" rel="noopener noreferrer">- Institut Pasteur</a>
            </Typography>
          </ListItem >
          <ListItem button >
          <Typography variant="h6"  color="inherit">
            <a href="https://www.conseil-national.medecin.fr/publications/actualites/coronavirus-informations-actualisees-quotidiennement" target="_blank" rel="noopener noreferrer">- Ordre des médecins</a>
            </Typography>
          </ListItem >
          <ListItem button>
          <Typography variant="h6"  color="inherit">
            <a href="https://www.who.int/fr/health-topics/coronavirus/coronavirus" target="_blank" rel="noopener noreferrer">- OMS </a>
            </Typography>
            </ListItem>
           
            <ListItem button>
            <Typography variant="h6"  color="inherit">
            <a href="https://covid.com-scape.fr/" target="_blank" rel="noopener noreferrer">- Infos Confinement </a>
            </Typography>
            </ListItem>
            

      </List>
    </div>
  );
return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" noWrap>
            Informations Covid-19
          </Typography>
        </Toolbar>
      </AppBar>
      
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
<Hidden smDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>  
        </Hidden>
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        
      </div>
    </div>
  );
}

export default ResponsiveDrawer;