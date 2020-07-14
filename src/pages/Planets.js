import React, {Fragment, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import {API_URL} from "../constants";
import EntityLink from "../components/EntityLink";
import {Col, Collapse, Row} from "antd";

const { Panel } = Collapse;

const Planets = () => {
    const [data, setData] = useState(null)
    const { planetsId } = useParams()

    const fetchDataPlanets = async () => {
        try{
            const response = await axios.get(`${API_URL}/planets/${planetsId}/`)
            setData(response.data)
        } catch (e) {
            console.log("error:", e.message)
        }
    }

    useEffect( () => {
        fetchDataPlanets()
    }, [])

    return (
        <Fragment>
            {data && (
                <Row  justify="center">
                    <Col span={18} className="coverForDate">
                        <h1 className="colorOfTitle"> Name: {data.name}</h1>
                        <h3> Rotation period: {data.rotation_period}</h3>
                        <h3> Orbital period: {data.orbital_period}</h3>
                        <h3> Diameter: {data.diameter}</h3>
                        <h3> Climate: {data.climate}</h3>
                        <h3> Gravity: {data.gravity}</h3>
                        <h3> Terrain: {data.terrain}</h3>
                        <h3> Surface water: {data.surface_water}</h3>
                        <h3> Population: {data.population}</h3>
                        <Collapse>
                            <Panel showArrow={false} header="Residents">
                                {data.residents.map(url => <EntityLink key={url} url={url} />)}
                            </Panel>
                            <Panel showArrow={false} header="Films">
                                {data.films.map(url => <EntityLink key={url} url={url} />)}
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
            )}
        </Fragment>
    )
}

export default Planets