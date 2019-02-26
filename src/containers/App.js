import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setTerm,
  invalidTerm,
  fetchMedications,
  doFetchMedications
} from "../actions/medication";
// import "./App.css";
// import LoginForm from "../components/LoginForm";
// import SignUpForm from "../components/SignUpForm";
import MedicationSearch from "../components/MedicationSearch";
// import Navigation from " ../components/Navigation";
import MedicationList from "./MedicationList";
class App extends Component {


  /*
    constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }
    componentDidMount() {
    let token = localStorage.getItem("token");

    if (token) {
      fetch(`http://localhost:3000/api/v1/current_user`, {
        headers: {
          Authorization: token
        }
      })
        .then(res => res.json())
        .then(response => {
          this.setState({
            currentUser: response
          });
        });
    }
  }
    logout = () => {
    // Set currentUser to null
    // Clear localStorage

    this.setState({
      currentUser: null
    });
    localStorage.removeItem("token");

    this.props.history.push("/login");
  };
    signup = (name, username, password, passwordConfirmation) => {
    if (password === passwordConfirmation) {
      fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: name,
          username: username,
          password: password
        })
      })
        .then(res => res.json())
        .then(response => {
          if (response.errors) {
            alert(response.errors);
          } else {
            localStorage.setItem("token", response.token);
            this.setState({
              currentUser: response.user
            });
          }
        });
    } else {
      alert("Passwords do not match!!");
    }
  };
    login = (username, password) => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {
          alert(response.errors);
        } else {
          localStorage.setItem("token", response.token);
          this.setState({
            currentUser: response.user
          });
          this.props.history.push(`/users/${response.user.id}`);
        }
      });
  };
  */

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatch, setTerm, medications } = this.props;
    dispatch(doFetchMedications(setTerm));
  }

  componentDidUpdate(prevProps) {
    if (this.props.setTerm !== prevProps.setTerm) {
      const { dispatch, setTerm } = this.props;
      dispatch(doFetchMedications(setTerm));
    }
    console.log(this.props.medicationReducer)
  }

  handleChange(nextMedication) {
    this.props.dispatch(setTerm(nextMedication));
    this.props.dispatch(doFetchMedications(nextMedication));
    console.log(this.props.medicationReducer)
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch, setTerm } = this.props;
    dispatch(invalidTerm(setTerm));
    dispatch(doFetchMedications(setTerm));
  }

  renderMedicationList(nextMedication) {
    this.props.dispatch(doFetchMedications(nextMedication)).then(data => data.medications)
  }

  render() {
    const { setTerm, medications, isFetching, } = this.props;

    console.log(this.props.medications)
    return (
      <div className="App">
        {/* <Navigation currentUser={this.state.currentUser} logout={this.logout}/> */}
        {/* <Navigation /> */}
        <MedicationSearch
          value={setTerm}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <MedicationList medications={this.props.medications}></MedicationList>

        {/* {isFetching && medications.length === 0 && <h2>Loa</h2>}
        {!isFetching && medications.length === 0 && <h2>Empty.</h2>} */}

        {/* { medications && <MedicationList medications={medications} /> } */}

        {/* <Switch>
          <Route path="/login" render={(routerProps) => <LoginForm login={this.login} {...routerProps}/>}/>

          <Route
            path="/signup"
            render={routerProps => (
          <SignUpForm signup={this.signup} {...routerProps} />
            )}
          />
          <Route path="/users/:id" component={YourBotArmy}/>


        </Switch> */}
      </div>
    );
  }
}
function mapStateToProps(state) {
  // debugger
  return {
    medicationTerm: state.medicationTermSet,
    medications: [...state.medicationsReducer.medications]
  }
  // debugger
  // const { medications, setTerm } = state;
  // const { isFetching } = state[setTerm || {
  //   isFetching: true,
  //   medications,
  // };
  // return {
  //   setTerm: action.setTerm,
  //   medications: action.medications,
  // };
}
export default connect(mapStateToProps)(App); // export default withRouter(App);
