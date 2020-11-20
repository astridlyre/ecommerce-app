import tw, { styled, GlobalStyles } from 'twin.macro'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import Home from './Home'
import Contact from './Contact'
import SignIn from './SignIn'
import NavMenu from '../components/NavMenu/NavMenu'
import Footer from '../components/Footer/Footer'
import Collection from './Collection'
import Product from './Product'

const StyledApp = styled.div`
  ${tw`flex flex-col items-center w-full min-h-screen overflow-x-hidden`}
  background: linear-gradient(45deg, #e3ece7, #f7e8bc98, #ead9f5af);
`

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <StyledApp>
        <NavMenu />
        <Switch>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/collection/:name/:id'>
            <Product />
          </Route>
          <Route path='/collection/:name'>
            <Collection />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </StyledApp>
    </Router>
  )
}

export default App
