import axios from "axios";
import React, { useState, useEffect } from "react";
import "../styles/SongForm.css";

const initialForm = {
  artist: "",
};

const SongForm = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    //console.log(e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  console.log(form);

  const artistURL = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${form.artist}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.artist) {
      alert("Complete el Campo de Búsqueda");
      return;
    }

    try {
      const response = await axios.get(artistURL);
      console.log(response);
      setForm(initialForm);
    } catch (error) {
      console.log(error);
      setForm(initialForm);
    }
  };

  return (
    <div className="container-heading-form">
      <h1 className="mainHeadingText">Busca tu Artista Favorito</h1>
      <form onSubmit={handleSubmit} className="form-artist">
        <input
          type="text"
          name="artist"
          placeholder="Nombre del Artista"
          onChange={handleChange}
          value={form.artist}
          className="input-artist"
        />
        <input type="submit" value="Buscar" className="submit-artist" />
      </form>
    </div>
  );
};

export default SongForm;
