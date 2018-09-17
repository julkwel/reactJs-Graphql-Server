import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { EmployesQuery, deleteEmployeQuery } from '../../queries/employe';

class ListItem extends Component {

  handleDeleteEmploye = (e) => {
    const { deleteEmploye, employe, alert } = this.props;
    deleteEmploye({
      variables: {
        id: employe.id,
      },
      refetchQueries: [ { query: EmployesQuery }]
    })
    .then((res) => {
      alert({
        success: 'Employe deleted!'
      });
    }).catch((error) => {
      alert({
        danger: error.message
      });
    });
  }

  handleEditEmploye = () => {
    this.props.editEmploye(this.props.employe);
  }

  render() {
    const employe = this.props.employe;
    return (
            <tr>
              <td>{employe.title}</td>
              <td>{employe.description}</td>
              <td>{employe.nom}</td>
              <td>{employe.prenom}</td>
              <td>{employe.age}</td>
              <td>{employe.poste}</td>
              <td>
                <button onClick={this.handleEditEmploye} className="btn btn-primary"><i class="fa fa-edit"></i></button>
                <button onClick={this.handleDeleteEmploye} className="btn btn-danger"><i class="fa fa-trash"></i></button>
              </td>
            </tr>
    );
  }
}

export default compose(
  graphql(deleteEmployeQuery, { name: 'deleteEmploye' }),
)(ListItem);
