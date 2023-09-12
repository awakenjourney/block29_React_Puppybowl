import React from "react";
import axios from "axios";

import { APIURL } from "../api/index";

const RemovePlayer = ({ playerId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`${APIURL}/players/${playerId}`);
      onDelete(playerId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default RemovePlayer;
