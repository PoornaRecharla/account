import React from "react" // eslint-disable-next-line
import { Route, Redirect } from "react-router-dom"
// import { useAuth } from "../contexts/AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
//   const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return <Component {...props} />
      }}
    ></Route>
  )
}
