import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './character-styles.css';

const BrowseCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCharacters = async () => {
            const publicKey = '59471b5628a86c37c005096dce883a87';
            const hash = 'a126744fc83299d209c4870c5df6fe77';
            try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`);
                setCharacters(response.data.data.results);
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        };

        fetchCharacters();

    }, []);
    

    const handleClick = (characterName) => {
        navigate(`/character-detail/${characterName}`);
    };
    
      return (

            <div className="character-grid">
                {characters.map((character) => (
                    <div key={character.id}
                        onClick={() => handleClick(character.name)}>
                        <h4>{character.name}</h4>
                        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                         alt={`${character.name}`} />
                    </div>
                ))}
            </div>

      );
    };
    
export default BrowseCharacters;