import React from 'react';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';

import { dateFromUTCString } from '../scripts/DateTimeHelpers'


export default class Ensayo_Properties extends React.Component
{
  constructor( props )
  {
    super( props );

    this.state = {
      Dialog_IsOpen: false,
    };
  }

  _handle_Open( )
  {
    this.setState( {
      Dialog_IsOpen: true
    } );
  }

  _handle_onTouchTap_Cancel = ( ) =>
  {
    this.setState( {
      Dialog_IsOpen: false
    } );
  };

  _handle_onTouchTap_OK = ( ) =>
  {
    this.props.updateHandler( {
      Ensayo_Content: this.refs.Ensayo_Content.getValue( ),
      Ensayo_Title: this.refs.Ensayo_Title.getValue( ),
      Ensayo_Description: this.refs.Ensayo_Description.getValue( ),
    } );

    this.setState( {
      Dialog_IsOpen: false
    } );
  };

  render( )
  {
    return(
      <div>
        <Dialog
          open={ this.state.Dialog_IsOpen }
          title="Ensayo"
          actions={ [
            <FlatButton key="Cancel" label="Cancel" onTouchTap={ this._handle_onTouchTap_Cancel } />,
            <FlatButton key="OK" label="OK" primary={true} onTouchTap={ this._handle_onTouchTap_OK } />,
          ] }
        >
          <TextField
            ref="Ensayo_Title"
            defaultValue={ this.props.Ensayo_Title }
            floatingLabelText="Title"
            fullWidth={ true }
          />
          <TextField
            ref="Ensayo_Description"
            defaultValue={ this.props.Ensayo_Description }
            floatingLabelText="Keywords"
            fullWidth={ true }
          />
          <TextField
            ref="Ensayo_Content"
            defaultValue={ this.props.Ensayo_Content }
            floatingLabelText="Content"
            fullWidth={ true }
          />
        </Dialog>
      </div>
    );
  }
}
