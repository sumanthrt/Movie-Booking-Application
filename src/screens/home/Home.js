import React, {Component} from 'react';

import Header from '../../common/header/Header';
import './Home.css';
import SingleLineImageList from './MovieList';
import moviesData from '../../common/moviesData';
import TitlebarImageList from './HomeImageList';
import SimpleCard from '../MovieFilter';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {data: moviesData};
    }

    render() {
        return(
            <div>
                <Header />
                <span className='heading'>Upcoming movies</span>
                <SingleLineImageList moviesData={this.state.data} />
                <div className='flex-container'>
                    <div className='homeImages'>
                        <TitlebarImageList moviesData={this.state.data} />
                    </div>
                    <div className='movieFilter'>
                        <SimpleCard />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;