import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Checkouts from './components/checkouts/Checkouts';
import MainNavbar from './components/shared/MainNavbar';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import CheckoutShow from './components/checkouts/CheckoutShow';
import LeaseShow from './components/leases/LeaseShow';
import LeaseForm from './components/leases/LeaseForm';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path="/checkouts/:id" component={CheckoutShow} />
          <ProtectedRoute exact path="/checkouts" component={Checkouts} />
          <ProtectedRoute exact path="/checkouts/:checkoutId/leases/:id" component={LeaseShow} />
          <ProtectedRoute exact path="/checkouts/:checkoutId/AddLease" component={LeaseForm} />
          <Route component={Nomatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;


