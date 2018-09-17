import { gql } from 'apollo-server-express'
import employeModel from './models'

export const typeDefs = gql`
  type Employe {
    id: ID
    nom: String
    prenom: String
    age: String
    title: String
    description: String
    poste: String
  }

  type Query {
    employes: [Employe]
  }

  type Mutation {
    createEmploye( nom: String!, prenom: String,age: String, title: String,description: String,poste: String ) : Employe
    updateEmploye(id: ID!, nom: String!, prenom: String,age: String, title: String,description: String,poste: String ) : Employe
    deleteEmploye(id: ID!): Employe
  }

`

export const resolvers = {
  Query: {
    employes() {
      return employeModel.list()
    }
  },
  Mutation: {
    // createEmploye(source, args) {
    //   return employeModel.create(args.input)
    // },
    createEmploye(source,args){
      return employeModel.create(args)
    },
    updateEmploye(source, args) {
      return employeModel.update(args.id, args.input)
    },
    deleteEmploye(source, args) {
      return employeModel.delete(args.id)
    }
  }
}
