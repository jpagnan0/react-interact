// import React from "react";
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import Drawer from "@material-ui/core/Drawer";
// import Divider from '@material-ui/core/Divider';
//
// import List from "@material-ui/core/List";
// import IconButton from "@material-ui/core/IconButton";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import { mainListItems, secondaryListItems } from "./SideNavigationItems";
// const drawerWidth = 240;
// const styles = theme => ({
//   root: {
//     display: "flex"
//   },
//   title: {
//     flexGrow: 1
//   },
//   drawerPaper: {
//     position: "relative",
//     whiteSpace: "nowrap",
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen
//     })
//   },
//   drawerPaperClose: {
//     overflowX: "hidden",
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen
//     }),
//     width: theme.spacing.unit * 7,
//     [theme.breakpoints.up("sm")]: {
//       width: theme.spacing.unit * 9
//     }
//   },
//
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing.unit * 3,
//     height: "100vh",
//     overflow: "auto"
//   },
//   h5: {
//     marginBottom: theme.spacing.unit * 2
//   }
// });
//
// const SideNavigation = (props) => {
//   const {classes} = props
//   return (
//     <Drawer
//       variant="permanent"
//       classes={{
//         paper: classNames(
//             classes.drawerPaper,
//             !props.open && classes.drawerPaperClose
//         )
//       }}
//       open={props.open}
//     >
//       <div className={classes.toolbarIcon}>
//         <IconButton onClick={props.handleDrawerClose}>
//           <ChevronLeftIcon />
//         </IconButton>
//       </div>
//       <Divider />
//         <List>{mainListItems}</List>
//         <Divider />
//         <List>{secondaryListItems}</List>
//       </Drawer>
//     )
// }
//
// export default SideNavigation;
