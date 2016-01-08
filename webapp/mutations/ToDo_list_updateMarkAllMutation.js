import Relay from 'react-relay';

export default class ToDo_list_updateMarkAllMutation extends Relay.Mutation {
  static fragments = {
    // TODO: Mark edges and totalCount optional
    ToDos: () => Relay.QL`
      fragment on ToDoConnection {
        edges {
          node {
            complete,
            id,
          },
        },
      }
    `,
    viewer: () => Relay.QL`
      fragment on User {
        id,
        totalCount,
      }
    `,
  };
  getMutation() {
    return Relay.QL`mutation{ToDo_list_updateMarkAll}`;
  }
  getFatQuery() {
    return Relay.QL`
      fragment on ToDo_list_updateMarkAllPayload {
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
        viewer: this.props.viewer.id,
      },
    }];
  }
  getVariables() {
    return {
      complete: this.props.complete,
    };
  }
  getOptimisticResponse() {
    var viewerPayload = {id: this.props.viewer.id};
    if (this.props.ToDos && this.props.ToDos.edges) {
      viewerPayload.ToDos = {
        edges: this.props.ToDos.edges
          .filter(edge => edge.node.complete !== this.props.complete)
          .map(edge => ({
            node: {
              complete: this.props.complete,
              id: edge.node.id,
            },
          }))
      };
    }
    if (this.props.viewer.totalCount != null) {
      viewerPayload.completedCount = this.props.complete ?
        this.props.viewer.totalCount :
        0;
    }
    return {
      viewer: viewerPayload,
    };
  }
}
