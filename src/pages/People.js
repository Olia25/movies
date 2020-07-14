import React, {Fragment, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import {API_URL} from "../constants";
import EntityLink from "../components/EntityLink";

const People = () => {
    const [data, setData] = useState(null)
    const { peopleId } = useParams()

    const fetchDataPeople = async () => {
        try{
            const response = await axios.get(`${API_URL}/people/${peopleId}/`)
            setData(response.data)
        } catch (e) {
            console.log("error:", e.message)
        }
    }

    useEffect( () => {
        fetchDataPeople()
    }, [])

    return (
        <Fragment>
            {data && (
                <div>
                    <div>{`Name: ${data.name}`}</div>
                    {data.films.map(url => <EntityLink key={url} url={url} />)}
                </div>
            )}
        </Fragment>
    )
}

export default People