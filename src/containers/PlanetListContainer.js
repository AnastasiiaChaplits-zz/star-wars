import React from 'react';

import SwapiService from '../api/swapisevice';
import PlanetList from '../components/PlanetList'
import ErrorNotification from '../components/ErrorNotification';
import Spinner from '../components/Spinner';

export default class PlanetListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            planets: [],
            error: false,
            nextPage: 1,
            isLoading: false,
            isLastPage: false
        }

        this.containerRef = React.createRef();
        this.handleScroll = this.handleScroll.bind(this)
    }

    swapiService = new SwapiService();

    componentDidMount() {
        this.getPlanets();

        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
        if (this.state.isLoading || this.state.isLastPage) {
            return;
        }
        
        const positionInViewport = this.containerRef.current.getBoundingClientRect();
        const hasNoHeight = positionInViewport.bottom === positionInViewport.top;
        const bottomWithGapPosition = positionInViewport.bottom - 100;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (!hasNoHeight && bottomWithGapPosition <= windowHeight) {
            this.getPlanets()
        }
    }

    getPlanets() {
        this.setState({
            isLoading: true
        });

        this.swapiService
            .getPlanets(`?page=${this.state.nextPage}`)
            .then(this.onLoadedPlanetsSucccess)
            .catch(this.onError);
    }

    onLoadedPlanetsSucccess = (data) => {
        this.setState({
            planets: [...this.state.planets, ...data.results],
            error: false,
            nextPage: this.state.nextPage + 1,
            isLoading: false,
            isLastPage: !data.next
        });

        // To check if one more page should be loaded
        this.handleScroll();
    }

    onError = () => {
        this.setState({
            error: true,
            isLoading: false
        });
    }

    render() {
        const { planets, error, isLoading } = this.state;

        const errorNotification = error ? <ErrorNotification /> : null;
        const contentLoaded = <PlanetList planets={planets} />;
        const spinner = isLoading ? <Spinner /> : null;

        return (
            <div ref={this.containerRef}>
                {spinner}
                {errorNotification}
                {contentLoaded}
            </div>
        )
    }
};
