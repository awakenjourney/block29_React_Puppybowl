import React from "react";
import { Routes, Route } from "react-router-dom";
import SinglePlayer from "./singlePlayerDetails";
import AllPlayers from "./allPlayers";
import NewPlayerForm from "./newPlayerForm";
import Homepage from "./homepage";

const PageContainer = () => {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/SinglePlayer/:playerId" element={<SinglePlayer />} />
        <Route path="/all-players" element={<AllPlayers />} />
        <Route path="/new-player" element={<NewPlayerForm />} />
      </Routes>
    </div>
  );
};

export default PageContainer;
