import axios from 'axios'

class Employe {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3000'
    })
  }

  list() {
    return this.api.get('/employes').then(res => res.data)
  }

  find(id) {
    return this.api.get(`/employes/${id}`).then(res => res.data)
  }

  create(data) {
    return this.api.post('/employes', data).then(res => res.data)
  }

  update(id, data) {
    return this.api.patch(`/employes/${id}`, data).then(res => res.data)
  }

  delete(id) {
    return this.api.delete(`/employes/${id}`).then(() => ({ id }))
  }
}

export default new Employe()
