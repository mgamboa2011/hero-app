import React, { useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

//import batman from '../../assets/heroes/dc-batman.jpg' estatico

//const heroImages = require.context('../../assets/heroes', true);

export const HeroScreen = () => {
    //extrae los datos del path
    const navigate = useNavigate();
    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

    if (!hero) {
        navigate('/');
    }
    const handleBack = () => {
        //regresa a la pag anterior
        if (navigate.length < 2) {
            navigate('/');
        } else {
            navigate(-1);
        }
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    //src={batman} estatico import
                    //src={heroImages(`./${heroeId}.jpg`)}
                    src={`../../assets/heroes/${heroeId}.jpg`} desde public assets
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    alt={superhero}
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-grou-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First Appearance: </b>{first_appearance}</li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>

                <button
                    className="btn btn-outline-info"
                    onClick={handleBack}
                >
                    Back
                </button>
            </div>
        </div>
    )
}
