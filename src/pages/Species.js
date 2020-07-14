import React, {Fragment, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import {API_URL} from "../constants";
import EntityLink from "../components/EntityLink";
import {Col, Collapse, Row} from "antd";

const { Panel } = Collapse;

const Species = () => {
    const [data, setData] = useState(null)
    const { speciesId } = useParams()

    const fetchDataSpecies = async () => {
        try{
            const response = await axios.get(`${API_URL}/species/${speciesId}/`)
            setData(response.data)
            console.log(response.data)
        } catch (e) {
            console.log("error:", e.message)
        }
    }

    useEffect( () => {
        fetchDataSpecies()
    }, [])

    return (
        <Fragment>
            {data && (
                <Row  justify="center">
                    <Col span={18} className="coverForDate">

                        <h1 className="colorOfTitle">Name: {data.name}</h1>
                        <h3> Classification: {data.classification}</h3>
                        <h3> Designation: {data.designation}</h3>
                        <h3> Average_height: {data.average_height}</h3>
                        <h3> Skin color: {data.skin_color}</h3>
                        <h3> Eye color: {data.eye_color}</h3>
                        <h3> Average lifespan: {data.average_lifespan}</h3>
                        <h3> Homeworld: {data.homeworld}</h3>
                        <h3> Language: {data.language}</h3>
                        <Collapse>
                            <Panel showArrow={false} header="People" key="1">
                                {data.people.map(url => <EntityLink key={url} url={url} />)}
                            </Panel>
                            <Panel showArrow={false} header="Films" key="2">
                                {data.films.map(url => <EntityLink key={url} url={url} />)}
                            </Panel>
                        </Collapse>

                    </Col>
                </Row>
            )}
        </Fragment>
    )
}

export default Species