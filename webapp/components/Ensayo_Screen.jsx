import React from 'react';
import Relay from 'react-relay';

import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardActions from 'material-ui/lib/card/card-actions';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import TextField from 'material-ui/lib/text-field';

import Ensayo_addMutation from '../mutations/Ensayo_addMutation';

import Ensayo_Properties from './Ensayo_Properties.jsx';


class Ensayo_Screen extends React.Component
{
  _Ensayo_add( Ensayo_properties )
  {
    console.log( "_Ensayo_add : " + JSON.stringify( Ensayo_properties ) )
    Relay.Store.commitUpdate(
      new Ensayo_addMutation( { ...Ensayo_properties, Viewer: this.props.Viewer } )
    );
  }

  _handleAddTouchTap( )
  {
    this.refs.Ensayo_Properties._handle_Open( );
  }

  render( )
  {
    return (
      <Card initiallyExpanded={true}>

        <CardHeader initiallyExpanded={true} title="Ensayo" subtitle="This means Essay in Spanish" />

        { this.props.children }

        <CardActions initiallyExpanded={true}>
          <FloatingActionButton
						secondary={true}
						linkButton={true}
						mini={true}
						style={ {float: 'right', marginBottom: 15, marginRight: 15 } }
            actAsExpander={true}
            onTouchTap={ this._handleAddTouchTap.bind( this ) }
          >
            <ContentAdd />
          </FloatingActionButton>
        </CardActions>

        <Ensayo_Properties
          ref="Ensayo_Properties"
          Ensayo_Content={ "" }
          Ensayo_Title={ "" }
          Ensayo_Keywords={ "" }
          updateHandler={ this._Ensayo_add.bind( this ) }
        />

      </Card>
    );
  }
}

export default Relay.createContainer( Ensayo_Screen, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        ${Ensayo_addMutation.getFragment('Viewer')},
      }
    `,
  },
});