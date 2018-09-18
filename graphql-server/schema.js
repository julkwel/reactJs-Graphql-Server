import { gql } from 'apollo-server-express'
import employeModel from './models'

const messages = [];
const users = [];

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

  type User {
    id: ID!
    name: String!
    messages: [Message]
   }

   type Message {
    id: ID! 
    text: String!
    user: User
   }

  type Query {
    employes: [Employe]
    messages: [Message] 
    users(id: ID!): User
  }

  type Mutation {
    createEmploye( nom: String!, prenom: String,age: String, title: String,description: String,poste: String ) : Employe
    updateEmploye(id: ID!, nom: String!, prenom: String,age: String, title: String,description: String,poste: String ) : Employe
    deleteEmploye(id: ID!): Employe
    sendMessage(text:String,users:String) : Message
  }
`

export const resolvers = {
  Query: {
    employes() {
      return employeModel.list()
    },
    messages: _ => messages,
    users: (root, {id}) => users.find( user => user.id == id) 
  },
  Mutation: {
    createEmploye(source,args){
      return employeModel.create(args)
    },
    sendMessage: (root, {text, user}) => {
      const new_message = {id: messages.length + 1, text: text}
      const old_user = users.find( db_user => db_user.name == user)
            if (old_user)
            {
              new_message.user = old_user.id
            }
            else
            {
              const new_user = {name: user, id: users.length + 1}
              users.push(new_user)
      new_message.user = new_user.id
            }
            messages.push(new_message)
            return new_message
          },
    updateEmploye(source, args) {
      return employeModel.update(args.id, args)
    },
    deleteEmploye(source, args) {
      return employeModel.delete(args.id)
    }
  },
  User: {
    messages: user => messages.filter( message => message.user == user.id)
  },
  Message: {
    user: message => users.find( user => user.id == message.user) 
  }
}
