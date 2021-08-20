const SongArtist = ({artist}) => {
    return (
        <section>
            <h3>{artist.strArtist}</h3>
            <img src={artist.strArtistThumb} alt="{artist.strArtist}" />
            <p>{artist.intBornYear} - {artist.intDiedYear || "Presente"}</p>
            <p>{artist.strCountry}</p>
            <p>{artist.strGenre} - {artist.strStyle}</p>
            <p>{artist.strBiographyEN}</p>
            <p>{`http://${artist.strWebsite}`}</p>
        </section>
    )
}

export default SongArtist
