import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = () => {
    //saca la location del url
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    //se usa para navegar entre url
    const navigate = useNavigate();

    //se usa para obtener el valor del input
    const [formValues, handleInputChange] = useForm({
        searchText: q,
    });

    //se usa para filtrar los heroes
    const { searchText } = formValues;

    const heroFiltered = useMemo(() => getHeroByName(q), [q]);

    //se usa para filtrar los heroes por el boton
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Find ur hero"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary btn-block m-1"
                        >
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        (q === '')
                        && <div className="alert alert-info">
                            Search a hero
                        </div>
                    }
                    {
                        heroFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
