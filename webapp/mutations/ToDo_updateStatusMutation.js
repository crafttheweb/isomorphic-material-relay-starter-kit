import Relay from 'react-relay';

export default class ToDo_updateStatusMutation extends Relay.Mutation {
  static fragments = {
    todo: () => Relay.QL`
      fragment on ToDo {
        id,
      }
    `,
    // TODO: Mark completedCount optional
    viewer: () => Relay.QL`
      fragment on User {
        id,
        completedCount,
      }
    `,
  };
  getMutation() {
    return Relay.QL`mutation{ToDo_updateStatus}`;
  }
  getFatQuery() {
    return Relay.QL`
      fragment on ToDo_updateStatusPayload {
        todo {
          complete,
        },
        viewer {
          completedCount,
          ToDos,
        },
      }
    `;
  }
  getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
        todo: this.props.todo.id,
        viewer: this.props.viewer.id,
      },
    }];
  }
  getVariables() {
    return {
      complete: this.props.complete,
      id: this.props.todo.id,
    };
  }
  getOptimisticResponse() {
    var viewerPayload = {id: this.props.viewer.id};
    if (this.props.viewer.completedCount != null) {
      viewerPayload.completedCount = this.props.complete ?
        this.props.viewer.completedCount + 1 :
        this.props.viewer.completedCount - 1;
    }
    return {
      todo: {
        complete: this.props.complete,
        id: this.props.todo.id,
      },
      viewer: viewerPayload,
    };
  }
}
