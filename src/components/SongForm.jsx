import React, { useState, useEffect } from 'react';

const initialForm = {
    artist: ''
}

const SongForm = ({handleSearch}) => {
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        //console.log(e.target.value);
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!form.artist) {
            alert("Complete el Campo de Búsqueda");
            return;
        }

        handleSearch(form);
        setForm(initialForm)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="artist" placeholder="Nombre del Artista" onChange={handleChange} value={form.artist} />
                <input type="submit" value="Buscar"/>
            </form>
        </div>
    )
}

export default SongForm
