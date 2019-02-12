import React, {Component} from "react";
import WelcomePage from "./WelcomePage";
import AuctionIndexPage from "./AuctionIndexPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './NavBar'
import SignInPage from './SignInPage'
import { User, Session } from "../requests";
import AuctionShowPage from './AuctionShowPage'




class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: null,
            loading: true
        }
        this.getCurrentUser = this.getCurrentUser.bind(this);
        this.destroySession = this.destroySession.bind(this);
    }

    destroySession() {
        this.setState({
          currentUser: null
        });
    
        Session.destroy();
      }
    
      getCurrentUser() {
        User.current().then(data => {
          const { current_user: currentUser } = data;
    
          if (currentUser) {
            this.setState({ currentUser });
          }
          this.setState({ loading: false });
        });
      }

      componentDidMount() {
        this.getCurrentUser();
      }

    render(){
        const { currentUser, loading } = this.state;

        return (
            <BrowserRouter>
                <div>
                    <NavBar currentUser={currentUser} onSignOut={this.destroySession} />
                    <Switch>
                        <Route path="/" exact component={WelcomePage}/>
                        <Route path="/auctions" exact component={AuctionIndexPage}/>
                        <Route path="/sign_in" render={routeProps => (
                            <SignInPage {...routeProps} onSignIn={this.getCurrentUser} />
                            )}
                        />
                        <Route path="/auctions/:id" component={AuctionShowPage} />

                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App