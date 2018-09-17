import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { EmployesQuery } from '../../queries/employe';
import ListItem from './listItem.js'

class List extends Component {

  componentWillMount() {
  }

  render() {
    const {loading, error,employes} = this.props.data;
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>${error}</div>;
    }
    return (
      <div className="table table-responsive">
        <table className="table table-bordered">
          <thead>
              <tr>
                  <th colspan="2">Experience</th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Age</th>
                  <th>Poste</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Title</td>
                  <td>Description</td>
                  <td colSpan="5"></td>
              </tr>
          { employes.map(employe => <ListItem
                key={employe.id}
                employe={employe}
                editEmploye={this.props.editEmploye}
                alert={this.props.alert} />) }
          </tbody>
      </table>
      </div>
    );
  }
}

export default graphql(EmployesQuery)(List);
