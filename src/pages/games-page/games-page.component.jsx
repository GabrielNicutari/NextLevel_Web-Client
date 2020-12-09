import React, { Component } from "react";

import http from "../../services/http.service";
import GameList from "../../components/game-list/game-list.component";
import Loading from "../../Loading";
import Pagination from "../../components/pagination/pagination.component";
import { CreateModal } from "../../components/game-create/game-create-modal.component";

import "./games-page.styles.scss";

class GamesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
      currentPage: 0,
      itemsPerPage: 1,
      totalPages: null,
      totalItems: null,
      sorting: "id,asc",

      loading: undefined,
      done: undefined,
      show: false,
    };
  }

  componentDidMount() {
    this.fetchAll(this.state.currentPage, this.state.sorting);
  }

  fetchAll(currentPage, sort) {
    this.setState({ loading: undefined });
    this.setState({ done: undefined });

    http
      .get("games?page=" + currentPage + "&sort=" + sort)
      .then((response) => {
        this.setState({ totalPages: response.data.totalPages });
        this.setState({ totalItems: response.data.totalItems });
        this.setState({ games: response.data.games });
        this.setState({ itemsPerPage: response.data.size });
      })
      .then(() => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ done: true });
        }, 500);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  paginate = (pageNr) => {
    this.setState({ currentPage: pageNr - 1 });
  };

  sortToggle = () => {
    this.state.sorting === "id,asc"
      ? this.setState({ sorting: "id,desc" })
      : this.setState({ sorting: "id,asc" });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.state.sorting !== prevState.sorting ||
      this.state.currentPage !== prevState.currentPage
    ) {
      this.fetchAll(this.state.currentPage, this.state.sorting);
    }
  }

  close = () => this.setState({ show: false });

  showModal = () => this.setState({ show: true });

  render() {
    const {games, done, loading, totalItems, currentPage, sorting, itemsPerPage, show,} = this.state;

    return (
      <div className="games-page">
        <div className="games-header">
          <h1 className="title">GAMES</h1>
          <div className="nav-bar">
            {show ? (
              <div onClick={this.close} className="back-drop show" />
            ) : (
              <div className="back-drop" />
            )}
            <button
              onClick={this.showModal}
              className="btn-large btn-openModal"
            >
              Create Game
            </button>
          </div>
          <CreateModal show={show} close={this.close} />
        </div>

        <div className="games-listings">
          <span className="results">
            {currentPage * itemsPerPage + 1} -{" "}
            {totalItems - currentPage * itemsPerPage > itemsPerPage
              ? (currentPage + 1) * itemsPerPage
              : totalItems}{" "}
            of {totalItems} total results for <strong>Games</strong>
          </span>

          <button className="btn-mini btn-sort" onClick={this.sortToggle}>
            <span>Sort: {sorting}</span>
          </button>
        </div>

        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          paginate={this.paginate}
          done={done}
        />

        {!done ? (
          <Loading loading={loading} />
        ) : (
          <GameList games={games} />
        )}
      </div>
    );
  }
}

export default GamesPage;
