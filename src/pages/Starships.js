import React, {Fragment, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import {API_URL} from "../constants";
import EntityLink from "../components/EntityLink";
import {Col, Collapse, Row} from "antd";

const { Panel } = Collapse;

const Starships = () => {
    const [data, setData] = useState(null)
    const { starshipsId } = useParams()

    const fetchDataStarships = async () => {
        try{
            const response = await axios.get(`${API_URL}/starships/${starshipsId}/`)
            setData(response.data)
        } catch (e) {
            console.log("error:", e.message)
        }
    }

    useEffect( () => {
        fetchDataStarships()
    }, [])

    return (
        <Fragment>
            {data && (
                <Row  justify="center">
                    <Col span={18} className="coverForDate">
                        <h1 className="colorOfTitle"> Name: {data.name}</h1>
                        <h3>Model: {data.model}</h3>
                        <h3>Manufacturer: {data.manufacturer}</h3>
                        <h3>Cost in credits: {data.cost_in_credits}</h3>
                        <h3>Length: {data.length}</h3>
                        <h3>Max atmosphering speed: {data.max_atmosphering_speed}</h3>
                        <h3>Crew: {data.crew}</h3>
                        <h3>Passengers: {data.passengers}</h3>
                        <h3>Cargo capacity: {data.cargo_capacity}</h3>
                        <h3>Consumables: {data.consumables}</h3>
                        <h3>Hyperdrive rating: {data.hyperdrive_rating}</h3>
                        <h3>MGLT: {data.MGLT}</h3>
                        <h3>Starship class: {data.starship_class}</h3>
                        <Collapse>
                            <Panel showArrow={false} header="Films" key="1">
                                {data.films.map(url => <EntityLink key={url} url={url} />)}
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
            )}
        </Fragment>
    )
}

export default Starships