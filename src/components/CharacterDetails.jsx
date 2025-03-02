import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './character-styles.css';

const CharacterDetail = () => {
    const [details, setDetails] = useState(null);
    const { name } = useParams();

    useEffect (() => {
        if (name) {
            const fetchCharacterDetails = async () => {
                const publicKey = '59471b5628a86c37c005096dce883a87';
                const hash = 'a126744fc83299d209c4870c5df6fe77';
                try {
                    const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}&name=${name}`)
                    console.log(response);
                    setDetails(response.data.data.results[0]);
                } catch (error) {
                    console.error('Error fetching Marvel character:', error);

                }
            };
            fetchCharacterDetails();
        }
    }, [name]);

    if (!details) return <p>Loading character details...</p>;

    return (
        <div className="character-details">
            
            <h2>{details.name}</h2>
            <img src={`${details.thumbnail.path}.${details.thumbnail.extension}`}
                         alt={`${details.name}`} />
            <p>{details.description || 'No description available.'}</p>
            <h3>Comics:</h3>
            <ul>
                {details.comics.items.length > 0 ? (details.comics.items.map((comic, index) => (
                        <li key={index}>{comic.name}</li> ))) : (<p>No comics available for this character.</p>)}
            </ul>

            <Link to="/browse-characters">
                <button>Return to Browse Characters</button>
            </Link>
        </div>
    );
};

export default CharacterDetail;