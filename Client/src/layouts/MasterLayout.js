import React from 'react';

import { Switch, Route } from "react-router-dom";
import adminRoutes from '../routes/adminRoutes';
import merchantRoutes from '../routes/merchantRoutes';

function MasterLayout() {
    const userInfo = localStorage.getItem('user')
    const userData = (JSON.parse(userInfo))

    return (

        <div>
            {
                userData?.role === 1 && <Switch>
                    {
                        adminRoutes.map((route, idx) => {
                            return (
                                route.component && (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={(props) => (
                                            <route.component {...props} />
                                        )}
                                    />
                                )
                            )
                        })
                    }




                    {/* <Redirect form="/admin" to="admin/dashboard" /> */}
                </Switch>
            }
            {
                userData?.role === 0 && <Switch>
                    {
                        merchantRoutes.map((route, idx) => {
                            return (
                                route.component && (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={(props) => (
                                            <route.component {...props} />
                                        )}
                                    />
                                )
                            )
                        })
                    }

                </Switch>
            }
            {/* <Footer /> */}
        </div>
    );
}
export default MasterLayout;