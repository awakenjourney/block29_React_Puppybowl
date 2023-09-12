import React, { useState } from "react";
import axios from "axios";

import { APIURL } from "../api/index";

const NewPlayerForm = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name);
    // console.log(breed);
    // console.log(status);

    try {
      const resp = await axios.post(`${APIURL}/players`, {
        name: name,
        breed: breed,
        status: status,
        image: image,
      });
      console.log(resp.data.data.players);

      //reset form
      setName("");
      setBreed("");
      setStatus("");
      setImage("");
    } catch (error) {
      console.log("error adding player", error);
    }
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Add New Player</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="breed">Breed:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="breed"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="status">Status:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                  />
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-lg mt-3">
                    Add Player
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPlayerForm;
