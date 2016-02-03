import { fromGlobalId, mutationWithClientMutationId } from "graphql-relay";
import { GraphQLString, GraphQLID, GraphQLNonNull } from "graphql";

import { DA_User_get } from '../../data/da/User';
import { DA_Ensayo_get, DA_Ensayo_update } from '../../data/da/Ensayo';

import EnsayoType from '../type/EnsayoType';

export default mutationWithClientMutationId( {
  name: 'Ensayo_update',
  inputFields: {
    id: { type: new GraphQLNonNull( GraphQLID ) },
    Ensayo_Content: { type: new GraphQLNonNull( GraphQLString ) },
    Ensayo_Title: { type: new GraphQLNonNull( GraphQLString ) },
    Ensayo_Keywords: { type: new GraphQLNonNull( GraphQLString ) },
  },
  outputFields: {
    Ensayo: {
      type: EnsayoType,
      resolve: ( {localEnsayoId} ) => DA_Ensayo_get( localEnsayoId ),
    }
  },
  mutateAndGetPayload: ( {id, Ensayo_Content, Ensayo_Title, Ensayo_Keywords } ) => {
    var localEnsayoId = fromGlobalId(id).id;
    return DA_Ensayo_update( localEnsayoId, {
      Ensayo_Content: Ensayo_Content,
      Ensayo_Title: Ensayo_Title,
      Ensayo_Keywords: Ensayo_Keywords,
    } )
    .then( ( ) => ( {localEnsayoId} ) )
    ;
  },
} );