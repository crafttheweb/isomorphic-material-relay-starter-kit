/* @flow weak */

import {GraphQLObjectType} from "graphql";

// ->->-> Compendium mutations imports

import Compendium_update from "../../units/imrsk-example-compendium/graphql/mutation/Compendium_update";

// <-<-<- Compendium mutations imports


// ->->-> Ensayo mutations imports

import Ensayo_add from "../../units/imrsk-example-ensayo/graphql/mutation/Ensayo_add";
import Ensayo_delete from "../../units/imrsk-example-ensayo/graphql/mutation/Ensayo_delete";
import Ensayo_update from "../../units/imrsk-example-ensayo/graphql/mutation/Ensayo_update";

// <-<-<- Ensayo mutations imports


// ->->-> ToDo mutations imports

import ToDo_add from "../../units/imrsk-example-todo/graphql/mutation/ToDo_add";
import ToDo_updateStatus from "../../units/imrsk-example-todo/graphql/mutation/ToDo_updateStatus";
import ToDo_list_updateMarkAll from "../../units/imrsk-example-todo/graphql/mutation/ToDo_list_updateMarkAll";
import ToDo_delete from "../../units/imrsk-example-todo/graphql/mutation/ToDo_delete";
import ToDo_updateRename from "../../units/imrsk-example-todo/graphql/mutation/ToDo_updateRename";

// <-<-<- ToDo mutations imports


// ->->-> Translaticiarum mutations imports

import Translaticiarum_add from "../../units/imrsk-example-translaticiarum/graphql/mutation/Translaticiarum_add";
import Translaticiarum_delete from "../../units/imrsk-example-translaticiarum/graphql/mutation/Translaticiarum_delete";
import Translaticiarum_update from "../../units/imrsk-example-translaticiarum/graphql/mutation/Translaticiarum_update";

// <-<-<- Translaticiarum mutations imports

// ->->-> Viewer mutations imports

import Viewer_update from "../mutation/Viewer_update";
import Viewer_updatePassword from "../mutation/Viewer_updatePassword";

// <-<-<- Viewer mutations imports


export default new GraphQLObjectType( {
  name: 'Mutation',
  fields: {

    // ->->-> Compendium mutations

    Compendium_update: Compendium_update,

    // <-<-<- Compendium mutations


    // ->->-> Ensayo mutations

    Ensayo_add: Ensayo_add,
    Ensayo_delete: Ensayo_delete,
    Ensayo_update: Ensayo_update,

    // <-<-<- Ensayo mutations


    // ->->-> ToDo mutations

    ToDo_add: ToDo_add,
    ToDo_updateStatus: ToDo_updateStatus,
    ToDo_delete: ToDo_delete,
    ToDo_updateRename: ToDo_updateRename,
    ToDo_list_updateMarkAll: ToDo_list_updateMarkAll,

    // <-<-<- ToDo mutations


    // ->->-> Translaticiarum mutations

    Translaticiarum_add: Translaticiarum_add,
    Translaticiarum_delete: Translaticiarum_delete,
    Translaticiarum_update: Translaticiarum_update,

    // <-<-<- Translaticiarum mutations

    // ->->-> Viewer mutations

    Viewer_update: Viewer_update,
    Viewer_updatePassword: Viewer_updatePassword,

    // <-<-<- Viewer mutations

  },
} );
