import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RemovePlayer from "./RemovePlayer";

import { APIURL } from "../api/index";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);

  console.log("Players: ", players);

  useEffect(() => {
    const fetchAllPlayers = async () => {
      try {
        const response = await axios.get(`${APIURL}/players`);
        const result = await response.data.data.players;
        setPlayers(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllPlayers();
  }, []);

  const handleDeletePlayer = (deletedPlayerById) => {
    setPlayers((deletedPlayer) =>
      deletedPlayer.filter((player) => player.id !== deletedPlayerById)
    );
  };

  return (
    <>
      <div className="players-container">
        <div className="row">
          {players.map((player) => (
            <div key={player.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={player.imageUrl}
                  className="card-img-top"
                  alt={player.name}
                />
                <div className="card-body">
                  <h4 className="card-title">{player.name}</h4>
                  <p className="card-text">{player.breed}</p>
                  <p className="card-text">{player.status}</p>
                  <p className="card-text">{player.teamId}</p>
                  <div className="text-center buttons">
                    <Link to={`/singlePlayer/${player.id}`}>
                      <button className="btn btn-primary">Details</button>
                    </Link>
                    <div>
                      <RemovePlayer
                        playerId={player.id}
                        onDelete={handleDeletePlayer}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllPlayers;
