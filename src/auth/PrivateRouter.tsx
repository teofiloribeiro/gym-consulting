import React, { useContext } from 'react';
// import { Route, Redirect, RouteProps } from 'react-router-dom';
// import { AuthContext } from './AuthContext';


// export const PrivateRouter = (props : any) => {
//     const { component: RouteComponent, ...other } = props;
//     const { user } = useContext <firebase.User | undefined> (AuthContext);

//     return (
//         <Route {...other}
//             render={(routeProps) => 
//                 !!user ? (<RouteComponent {...routeProps}/>) :
//                 (<Redirect to= "/" />) 
//             }/>
//     )
// }