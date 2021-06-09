import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class MovieTable extends Component {
  state = {
    movies: getMovies(),
  };

  countMovies() {
    const count = this.state.movies.length;
    return count;
  }

  handleDelete = () => {
    console.log('you are trying to delete');
  };

  renderTableData() {
    return this.state.movies.map((m) => {
      return (
        <tr key={m._id}>
          <td>{m.title}</td>
          <td>{m.genre.name}</td>
          <td>{m.numberInStock}</td>
          <td>{m.dailyRentalRate}</td>
          <td>
            {' '}
            <button
              onClick={this.handleDelete}
              type="button"
              className="btn btn-danger"
            >
              Delete
            </button>{' '}
          </td>
        </tr>
      );
    });
  }

  render() {
    console.log(this.renderTableData());
    return (
      <div>
        <h3>Please see our movies</h3>
        <p>Showing {this.countMovies()} movies in our stores</p>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Number In Stock</th>
              <th scope="col">Daily Rental Rate</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

/* <ol>
{this.state.movies.map((m) => {
  return (
    <li key={m._id}>
      <p>{m.title}</p>
    </li>
    
  );
})}
</ol> */
// prisideti bootstrap@4.6
// isitrauksim bootstrap css
// sugeneruosim lentele su movie duomenimis
// prisideti dar viena stulpeli ir jame turetu buti delete mygtukas

export default MovieTable;
