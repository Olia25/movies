import React, {Fragment, useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {Row, Col, Input} from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios'
import { Link } from "react-router-dom";
import {getRoutUrl} from "../utils";

const Films = () => {
    const [data, setData] = useState([])
    const [text, setText] = useState("")

    const fetchDataFilms = async () => {
        try{
            const response = await axios.get('https://swapi.dev/api/films/')
            setData(response.data.results)
        } catch (e) {
            console.log("error:", e.message)
        }
    }

    useEffect( () => {
        fetchDataFilms()
    }, [])

    const sortedMovies = data.sort((a, b) => {
        if (a.title < b.title)
            return -1
        if (a.title > b.title)
            return 1
        return 0
    })

    const filteredFilms = sortedMovies.filter(({title}) => title.toLowerCase().includes(text))

    return (
        <Fragment>
            <Row justify="center">
                <Col span={14}>
                    <Input
                        placeholder="Search"
                        prefix={<SearchOutlined />}
                        value={text}
                        onChange={({target:{value}}) => setText(value)}
                    />
                </Col>
            </Row>

            <Row className="marginFilm" justify="space-around">
                    {filteredFilms.map(({title, url}) =>(
                        <Link key={url} to={getRoutUrl(url)}>
                            <div className="borderOfTitle">
                                <h2>{title}</h2>
                            </div>
                        </Link>
                    ))}
            </Row>
        </Fragment>
    )
}

export default Films;