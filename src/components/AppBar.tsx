import React, { useContext, useCallback } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext';
import { logout } from '../auth/AuthService';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const MenuAppBar = withRouter(({ history }) => {
  const classes = useStyles();
  //const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = useCallback(
        async (event: any) => {
          event.preventDefault();        
          try{
              await logout();
              history.push('/login');
          }catch(error) {
              //TODO SHOW ERROR ON SCREEN
              console.log(error)
          }
        },
        [history]
    );   
      
  const auth = useContext(AuthContext);

  if (!auth) {
    return null
  }

  return (<div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" className={classes.title} align="center">
          Studio Body
          </Typography>
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Sair</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  </div>)

});

export default MenuAppBar;