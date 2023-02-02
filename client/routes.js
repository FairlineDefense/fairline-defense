import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {
  Login,
  Signup,
  UserHome,
  PortalNavbar,
  SiteHome,
  Testimonials,
  TermsOfService,
  Coverages,
  HowItWorks,
  Membership,
  Benefits,
  Feed,
  PaymentStatus,
  VerifyEmail,
  VerifyPhone,
  SecurityHome,
  MembershipAndBilling,
  VerifiedEmail,
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
          <Switch>
            <Route exact path="/" component={SiteHome} />
            <Route exact path="/armedprofessionals" component={SecurityHome} />
            <Route exact path="/howitworks" component={HowItWorks} />
            <Route exact path="/coverages" component={Coverages} />
            <Route exact path="/testimonials" component={Testimonials} />
            <Route exact path="/termsofservice" component={TermsOfService} />
            <Route exact path="/privacypolicy" component={TermsOfService} />
            <Route path="/home" component={UserHome} />
            <Route path="/membership" component={Membership} />
            <Route path="/benefits" component={Benefits} />
            <Route path="/feed" component={Feed} />
            <Route path="/paymentstatus" component={PaymentStatus} />
            <Route path="/verifyemail" component={VerifyEmail} />
            <Route path="/verifyphone" component={VerifyPhone} />
            <Route exact path="/success" component={VerifiedEmail} />
          </Switch>
        </div>
      ) : (
        <div>
          <Switch>
            <Route exact path="/" component={SiteHome} />
            <Route exact path="/armedprofessionals" component={SecurityHome} />
            <Route exact path="/home" component={Login} />
            <Route exact path="/howitworks" component={HowItWorks} />
            <Route exact path="/coverages" component={Coverages} />
            <Route exact path="/testimonials" component={Testimonials} />
            <Route exact path="/termsofservice" component={TermsOfService} />
            <Route exact path="/privacypolicy" component={TermsOfService} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/success" component={VerifiedEmail} />
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
