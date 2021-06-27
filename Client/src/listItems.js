import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import MoodIcon from '@material-ui/icons/Mood';
import AttachMoney from '@material-ui/icons/AttachMoney';


export const mainListItems = (name, money) =>{
  return (
    <div>
    <ListItem>
      <ListItemIcon>
        <MoodIcon/>
      </ListItemIcon>
      <ListItemText primary={name}/>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <AttachMoney />
      </ListItemIcon>
      <ListItemText primary={money}/>
    </ListItem>
  </div>
  );
} 


export const secondaryListItems = (
  <div>
    <ListItem button component="a" href="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard"/>
    </ListItem>
    <ListItem button component="a" href="/marketplace">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Marketplace" />
    </ListItem>
    <ListItem button component="a" href="/settings">
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText onClick={() => { document.cookie = "session_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; window.location.replace("/login")} } primary="Logout" />
    </ListItem>
  </div>
);

export default ListItem;