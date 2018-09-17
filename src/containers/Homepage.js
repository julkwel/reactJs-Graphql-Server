import React, { Component } from 'react';
import EmployesAdd from '../components/employe/add';
import EmployesEdit from '../components/employe/edit';
import EmployesList from '../components/employe/list';
import Navbar from '../components/utils/Navbar'
import Alert from './alert';

class App extends Component {

  state = {
    addEmploye: null,
    editEmploye: null,
    alert: ''
  }

  addEmploye = () => {
    this.setState({
      addEmploye: {
        nom: '',
        prenom: '',
        age:'',
        title:'',
        description:'',
      }
    });
  }

  editEmploye = (employe) => {
    this.setState({
      editEmploye: employe
    });
  }

  close = () => {
    this.setState({
      addEmploye: null,
      editEmploye: null,
    });
  }

  alert = (msg) => {
    this.setState({
      alert: {
        type: Object.keys(msg)[0],
        message: Object.values(msg)[0]
      }
    });
  }

  render() {
    return (
      <div className="content">
        <Navbar/>
        <Alert alert={this.state.alert} />
        <div className="col-md-12">
          <div className="form-group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.addEmploye}>
              <i className="fa fa-plus-circle"></i>Nouveau employe</button>
          </div>
          <div>
            <EmployesList
              editEmploye={this.editEmploye}
              alert={this.alert} />
            <EmployesAdd
              employe={this.state.addEmploye}
              close={this.close}
              alert={this.alert} />
            <EmployesEdit
              employe={this.state.editEmploye}
              close={this.close}
              alert={this.alert} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
