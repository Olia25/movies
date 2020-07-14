import React, {Fragment, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import {API_URL} from "../constants";
import EntityLink from "../components/EntityLink";

const Film = () => {
    const [data, setData] = useState(null)
    const { filmId } = useParams()

    const fetchDataFilm = async () => {
        try{
            const response = await axios.get(`${API_URL}/films/${filmId}/`)
            setData(response.data)
        } catch (e) {
            console.log("error:", e.message)
        }
    }

    useEffect( () => {
        fetchDataFilm()
    }, [])

    return (
        <Fragment>
            {data && (
                <div>
                    <div>{`Title: ${data.title}`}</div>
                    characters:
                    {data.characters.map(url => <EntityLink key={url} url={url} />)}

                </div>
            )}
        </Fragment>
    )
}

export default Film