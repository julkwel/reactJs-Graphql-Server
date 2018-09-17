import gql from 'graphql-tag';

export const EmployesQuery = gql `
    query employes {
        employes {
            id
            age
            nom
            prenom
            poste
            title
            description
        }
    }
`;

export const createEmployeQuery  = gql `
    mutation createEmploye($age: String!,$title: String!,$description: String!,$nom: String!,$poste: String!,$prenom: String!){
        createEmploye(age:$age,title:$title,description:$description,nom:$nom,poste:$poste,prenom:$prenom){
            id
            age
            title
            description
            nom
            poste
            prenom
        }
    }
`;

export const updateEmployeQuery  = gql `
    mutation updateEmploye(
        $id: ID!,
        $age: String!
        $title: String!
        $description:String!
        $nom: String!
        $poste: String!
        $prenom: String!
    ){
        updateEmploye(
            id: $id,
            age:$age,
            title:$title,
            description:$description
            nom:$nom,
            poste:$poste,
            prenom:$prenom
        ){
            id,
            age,
            title
            description
            nom
            prenom
            poste
        }
    }
`;

export const deleteEmployeQuery = gql`
    mutation deleteEmploye($id:ID!){
        deleteEmploye(id:$id){
            id
        }
    }
`;