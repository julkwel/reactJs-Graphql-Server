import React, { Component } from 'react';
import Alert from '../../containers/alert';
import $ from 'jquery';
import 'bootstrap';

class EmployeForm extends Component {

  state = {
    nom: '',
    prenom: '',
    age: '',
    poste:'',
    title:'',
    description:''
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.employe && !this.props.employe) {
      const { nom,prenom,age,poste ,title,description} = nextProps.employe;
      this.setState({ nom,prenom,age,poste,title,description});
    }
  }

  componentDidUpdate() {
    if (this.props.employe) {
      $(`#${this.props.modalId}`).modal('show');
    } else {
      $(`#${this.props.modalId}`).modal('hide');
    }
  }

  handleSubmit = (e) => {
    const { nom,prenom,age ,poste,title,description} = this.state;
    e.preventDefault();
    this.props.handleSubmit({ nom,prenom,age ,poste,title,description});
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { close, modalId, alert } = this.props;
    const { nom,prenom,age,poste,title,description } = this.state;

    return (
      <div className="modal fade in" id={modalId} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={this.handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">Teste</h5>
                <button type="button" className="close" onClick={close}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Alert alert={alert} />
                <div className="form-row">
                  <div className="form-group">
                  <label>Nom</label>
                    <input
                      type="text"
                      name="nom"
                      value={nom}
                      required
                      placeholder="Name"
                      onChange={this.handleOnChange}
                      className="form-control" />
                  </div>
                  <div className="form-group">
                  <label>Prénom</label>
                    <input
                      type="text"
                      name="prenom"
                      value={prenom}
                      required
                      placeholder="Prenom"
                      onChange={this.handleOnChange}
                      className="form-control" />
                  </div>
                  <div className="form-group">
                  <label>Poste</label>
                    <input
                      type="text"
                      name="poste"
                      value={poste}
                      required
                      placeholder="Poste"
                      onChange={this.handleOnChange}
                      className="form-control" />
                  </div>
                  <div className="form-group">
                  <label>Age</label>
                    <input
                      type="text"
                      name="age"
                      value={age}
                      required
                      placeholder="age"
                      onChange={this.handleOnChange}
                      className="form-control" />
                  </div>
                  <div className="form-group">
                  <label>Experience</label>
                  <div className="form-group">
                    <input
                      type="text"
                      name="title"
                      value={title}
                      required
                      placeholder="Title"
                      onChange={this.handleOnChange}
                      className="form-control" />
                  </div>
                    <input
                      type="text"
                      name="description"
                      value={description}
                      required
                      placeholder="Description"
                      onChange={this.handleOnChange}
                      className="form-control" />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={close}>Close</button>
                <input
                  type="submit"
                  name="Save changes"
                  placeholder="New employe"
                  className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeForm;
