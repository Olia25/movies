import React, {Fragment, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import {API_URL} from "../constants";
import EntityLink from "../components/EntityLink";
import {Col, Collapse, Row} from "antd";

const { Panel } = Collapse;

const Vehicles = () => {
    const [data, setData] = useState(null)
    const { vehiclesId } = useParams()

    const fetchDataVehicles = async () => {
        try{
            const response = await axios.get(`${API_URL}/vehicles/${vehiclesId}/`)
            setData(response.data)
            console.log(response.data)
        } catch (e) {
            console.log("error:", e.message)
        }
    }

    useEffect( () => {
        fetchDataVehicles()
    }, [])

    return (
        <Fragment>
            {data && (
                <Row  justify="center">
                    <Col span={18} className="coverForDate">
                        <h1 className="colorOfTitle">Name: {data.name}</h1>
                        <h3> Model: {data.model}</h3>
                        <h3> Manufacturer: {data.manufacturer}</h3>
                        <h3> Cost in credits: {data.cost_in_credits}</h3>
                        <h3> Length: {data.length}</h3>
                        <h3> Max atmosphering speed: {data.max_atmosphering_speed}</h3>
                        <h3> Crew: {data.crew}</h3>
                        <h3> Passengers: {data.passengers}</h3>
                        <h3> Cargo_capacity: {data.cargo_capacity}</h3>
                        <h3> Consumables: {data.consumables}</h3>
                        <h3> Vehicle class: {data.vehicle_class}</h3>
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

export default Vehicles