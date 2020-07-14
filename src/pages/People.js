import React, {Fragment, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import {API_URL} from "../constants";
import EntityLink from "../components/EntityLink";
import {Col, Collapse, Row} from "antd";

const { Panel } = Collapse;

const People = () => {
    const [data, setData] = useState(null)
    const { peopleId } = useParams()

    const fetchDataPeople = async () => {
        try{
            const response = await axios.get(`${API_URL}/people/${peopleId}/`)
            setData(response.data)
            console.log(response.data)
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
                <Row  justify="center">
                    <Col span={18} className="coverForDate">

                        <h1 className="colorOfTitle">Name: {data.name}</h1>
                        <h3> Height: {data.height}</h3>
                        <h3> Mass: {data.mass}</h3>
                        <h3> Hair color: {data.hair_color}</h3>
                        <h3> Skin color: {data.skin_color}</h3>
                        <h3> Eye color: {data.eye_color}</h3>
                        <h3> Birth year: {data.birth_year}</h3>
                        <h3> Gender: {data.gender}</h3>
                        <Collapse>
                            <Panel showArrow={false} header="Homeworld" key="1">
                                 <EntityLink url={data.homeworld} />
                            </Panel>
                            <Panel showArrow={false} header="Films" key="2">
                                {data.films.length <= 0 ?  <p> Nothing is found </p> : data.films.map(url => <EntityLink key={url} url={url} />)}
                            </Panel>
                            <Panel showArrow={false} header="Starships" key="3">
                                {data.starships.length <= 0 ?  <p> Nothing is found </p> : data.starships.map(url => <EntityLink key={url} url={url} />)}
                            </Panel>
                            <Panel showArrow={false} header="Species" key="4">
                                {data.species.length <= 0 ? <p> Nothing is found </p>  : data.species.map(url => <EntityLink key={url} url={url} />)}
                            </Panel>
                        </Collapse>

                    </Col>
                </Row>
            )}
        </Fragment>
    )
}

export default People