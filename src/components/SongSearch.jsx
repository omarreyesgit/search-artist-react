import React, { useState, useEffect } from "react";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import Loader from "./Loader";
import { helpHttp } from "../helpers/helpHttp";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      setLoading(true);
      const artistRes = await helpHttp().get(artistUrl);

      console.log(artistRes);
      setBio(artistRes);
      setLoading(false);
    };
    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    //console.log(data);
    setSearch(data);
  };

  return (
    <div>
      <h2>Buscador de Canciones</h2>
      {loading && <Loader />}
      <SongForm handleSearch={handleSearch} />
      {search && !loading && <SongDetails search={search} bio={bio} />}
    </div>
  );
};

export default SongSearch;
