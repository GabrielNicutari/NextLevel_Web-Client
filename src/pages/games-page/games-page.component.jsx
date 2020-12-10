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

      platforms: [],
      sysRequirements: [],
      genres: [],
      modes: [],
      pegiRatings: [],

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

    http.all([
      http.get("games?page=" + currentPage + "&sort=" + sort),
      http.get("/games/platforms"),
      http.get("/games/sys-requirements"),
      http.get("/games/genres"),
      http.get("/games/modes"),
      http.get("/games/pegi-rating")
    ])
    .then(
        http.spread(
            (...responses) => {
              this.setState({games: responses[0].data.games})

              this.setState({ totalPages: responses[0].data.totalPages })
              this.setState({ totalItems: responses[0].data.totalItems })
              this.setState({ itemsPerPage: responses[0].data.size })

              this.setState({platforms: responses[1].data})
              this.setState({sysRequirements: responses[2].data})
              this.setState({genres: responses[3].data})
              this.setState({modes: responses[4].data})
              this.setState({pegiRatings: responses[5].data})
            }
        )
    )
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

    console.log(this.state);

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
          <CreateModal show={show} close={this.close} state={this.state}/>
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
