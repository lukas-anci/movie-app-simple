import React, { Component } from 'react';
class MovieRow extends Component {
  state = {};
  render() {
    const { movie } = this.props;
    return (
      <tr>
        <td>{movie.title}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.genre.name}</td>
        <td>
          <button onClick={this.props.onDelete} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default MovieRow;
