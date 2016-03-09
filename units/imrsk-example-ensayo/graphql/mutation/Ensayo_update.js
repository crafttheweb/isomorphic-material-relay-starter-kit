/* @flow weak */

import { fromGlobalId, mutationWithClientMutationId } from "graphql-relay";
import { GraphQLString, GraphQLID, GraphQLNonNull } from "graphql";

import { DA_User_get } from '../../../../data/da/User';

import EnsayoType from '../type/EnsayoType';

export default mutationWithClientMutationId( {
  name: 'Ensayo_update',
  inputFields: {
    id:                 { type: new GraphQLNonNull( GraphQLID ) },
    Ensayo_Content:     { type: new GraphQLNonNull( GraphQLString ) },
    Ensayo_Title:       { type: new GraphQLNonNull( GraphQLString ) },
    Ensayo_Description: { type: new GraphQLNonNull( GraphQLString ) },
  },
  outputFields: {
    Ensayo: {
      type: EnsayoType,
      resolve: ( {local_id}, { ...args }, { rootValue: {user_id, objectManager} } ) => objectManager.getOneById( 'Ensayo', local_id ),
    }
  },
  mutateAndGetPayload: ( {id, Ensayo_Content, Ensayo_Title, Ensayo_Description }, { rootValue: {objectManager} } ) => {
    var local_id = fromGlobalId(id).id;
    return objectManager.update( 'Ensayo', {
      id: local_id,
      Ensayo_Content,
      Ensayo_Title,
      Ensayo_Description,
    } )
    .then( ( ) => ( {local_id} ) )
    ;
  },
} );