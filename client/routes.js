import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {
  Login,
  Signup,
  UserHome,
  PortalNavbar,
  SiteHome,
  Testimonials,
  Coverages,
  HowItWorks
} from './components'
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
      {isLoggedIn ? (
        <div>
          <PortalNavbar />
          <Switch>
            <Route path="/home" component={UserHome} />
          </Switch>
        </div>
      ) : (
        <div>
          <Switch>
            <Route exact path="/" component={SiteHome} />
            <Route exact path="/howitworks" component={HowItWorks} />
            <Route exact path="/coverages" component={Coverages} />
            <Route exact path="/testimonials" component={Testimonials} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      )}
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
