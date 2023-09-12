import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIURL } from "../api/index";
import { useParams, useNavigate } from "react-router-dom";

const SinglePlayer = () => {
  const [player, setPlayer] = useState(null);
  const { playerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSinglePlayer = async () => {
      try {
        const response = await axios.get(`${APIURL}/players/${playerId}`);
        const result = await response.data.data.player;
        setPlayer(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSinglePlayer();
  }, [playerId]);

  const closeHandle = () => {
    navigate(-1);
  };

  return (
    <div className="single-player-container">
      {player ? (
        <>
          <h4>{player.name}</h4>
          <p>{player.breed}</p>
          <p>{player.status}</p>
          <p>{player.teamId}</p>
          <img src={player.imageUrl} alt={player.name} width={250} />
          <button className="btn btn-primary mt-4" onClick={closeHandle}>
            Close
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SinglePlayer;
