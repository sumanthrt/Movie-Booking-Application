import React,{Component} from "react";
import './Details.css';
import '../../common/header/Header';
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Header from "../../common/header/Header";

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Header btnType="bookshow" variant="contained" buttonName="BOOK SHOW" />
                <div className="backBtn"><Link to="/"><Typography>{"<"} Back To Home</Typography></Link></div>
                <div className="flex-container">
                    <div className="detailImage"></div>
                    <div className="trailer"></div>
                    <div className="rating"></div>
                </div>
            </div>
        )
    }
}

export default Details;