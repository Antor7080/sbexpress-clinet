import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect, Switch, Route, useHistory } from "react-router-dom";
import Swal from 'sweetalert2';
import MasterLayout from './layouts/MasterLayout';



export default function AdminPrivateRoute({ ...rest }) {
    /*   const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
      })
  
      const history = useHistory();
      const [Authenticate, setAuthenticate] = useState(false);
      const [loading, setloading] = useState(true); */

    /*   useEffect(() => {
  
          axios.get(`/api/checkAuthenticated`).then((response) => {
              if (response.status === 200) {
                  setAuthenticate(true);
              }
  
              setloading(false);
          });
  
          return () => {
              setAuthenticate(false);
  
          };
      }, []); */

    /*   axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
          if (err.response.status === 401) {
              //Swal.fire("Unauthorized 401", err.response.data.message, "warning");
              Toast.fire({
                  icon: "error",
                  title: err.response.data.message,
              });
              history('/login');
          }
          console.log(err);
          return Promise.reject(err);
      });
  
      axios.interceptors.response.use(function (response) {
          return response;
      }, function (error) {
          if (error.response.status === 403) {
              Swal.fire("Unauthorized 403", error.response.data.message, "warning");
              history("/page403");
          }
          if (error.response.status === 404) {
              Swal.fire("Unauthorized 404", error.response.data.message, "warning");
              history("/page404");
          }
          return Promise.reject(error);
      });
   */

    /*  if (loading) {
         return <h1>Loading...</h1>
     } */

    // console.log(...rest);
    const token = localStorage.getItem("token")
    console.log(token);
    return (
        <div>
            <Route {...rest}
                render={({ props, location }) =>


                    token ? (<MasterLayout {...props} />) :
                        (<Redirect to={{ pathname: "/", state: { from: location } }} />)
                }

            />
        </div>
    );

}
