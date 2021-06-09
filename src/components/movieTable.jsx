import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class MovieTable extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movieId) => {
    console.log('you are trying to delete', movieId);
    const moviesWithoutTheOneWeDeleted = this.state.movies.filter(
      (m) => m._id !== movieId
    );
    this.setState({ movies: moviesWithoutTheOneWeDeleted });
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
              onClick={() => this.handleDelete(m._id)}
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
    const { movies: mv } = this.state;
    if (mv.length === 0)
      return (
        <div className="alert alert-warning">
          There are no movies at the moment
        </div>
      );

    return (
      <div className="container">
        <h3>Please see our movies</h3>
        <p>Showing {mv.length} movies in our stores</p>

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
