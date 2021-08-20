import SongArtist from "./SongArtist";
import Message from "./Message";

const SongDetails = ({ search, bio }) => {
  if (!bio) return null;
  return (
    <div>
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: no se encuentra el Artista con el nombre de " ${search.artist} "`}
          bgColor="#dc3545"
        />
      )}
    </div>
  );
};

export default SongDetails;
