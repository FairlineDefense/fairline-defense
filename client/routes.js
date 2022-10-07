import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Login, Signup, UserHome, PortalNavbar} from './components'
import {me} from './store'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

const Routes = props => {
  const user = useSelector(state => state.user)
  const isLoggedIn = user.id

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(me())
  }, [])

  return (
    <Switch>
      {/* Routes placed here are available to all visitors */}
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      {isLoggedIn && (
        <div>
          <PortalNavbar />
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
          </Switch>
        </div>
      )}
      {/* Displays our Login component as a fallback */}
      <Route component={Login} />
    </Switch>
  )
}

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
//     // Otherwise, state.user will be an empty object, and state.user.id will be falsey
//     isLoggedIn: !!state.user.id
//   }
// }

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
// export default withRouter(connect(mapState, mapDispatch)(Routes))
export default Routes

/**
 * PROP TYPES
 */
// Routes.propTypes = {
//   loadInitialData: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
