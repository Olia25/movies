import React from 'react';
import { Link } from "react-router-dom";
import {getRoutUrl} from "../utils";

const EntityLink = ({ url }) => (
    <Link  to={getRoutUrl(url)}>
        <div>
            {url}
        </div>
    </Link>
)

export default EntityLink