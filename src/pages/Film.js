import React, {Fragment, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import {API_URL} from "../constants";
import EntityLink from "../components/EntityLink";
import {Row, Col, Collapse} from "antd"

const Film = () => {
    const [data, setData] = useState(null)
    const { filmId } = useParams()

    const { Panel } = Collapse;

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
                <Row  justify="center">
                    <Col span={18} className="coverForDate">
                       <h1 className="colorOfTitle"> "{data.title}"</h1>
                        <h3 className="openingCrawl">Opening crawl: {data.opening_crawl}</h3>
                        <h3>Director: {data.director}</h3>
                        <h3>Producer: {data.producer}</h3>
                        <h3>Release date: {data.release_date}</h3>
                        <Collapse>
                            <Panel showArrow={false} header="Characters" key="1">
                               {data.characters.map(url => <EntityLink key={url} url={url} />)}
                            </Panel>
                            <Panel showArrow={false}  header="Planets" key="2">
                                {data.planets.map(url => <EntityLink key={url} url={url} />)}
                            </Panel>
                            <Panel showArrow={false}  header="Starships" key="3">
                                {data.starships.map(url => <EntityLink key={url} url={url} />)}
                            </Panel>
                            <Panel showArrow={false} header="Vehicles" key="4">
                                {data.vehicles.map(url => <EntityLink key={url} url={url} />)}
                            </Panel>
                            <Panel showArrow={false} header="Species" key="5">
                                {data.species.map(url => <EntityLink key={url} url={url} />)}
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
            )}
        </Fragment>
    )
}

export default Film