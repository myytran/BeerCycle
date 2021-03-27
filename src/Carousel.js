import React, {useState, Fragment} from 'react';
import Beer from './Beer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal';


function Carousel(props) {
    const allBeers = [...props.beers];
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(5);

    const initialBeers = allBeers.slice(startIndex,endIndex);
    const [visibleBeers, setVisibleBeers] = useState(initialBeers);
    const [filteredBeers, setFilteredBeers] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const [minAbv, setMinAbv] = useState(null);
    const [maxAbv, setMaxAbv] = useState(null);

    const onClickNextBeers = () => {
        //checks to see if we are on the last page
        if (filteredBeers) {
            if (endIndex >= filteredBeers.length - 1) {
                return;
            }
        } else {
            if (endIndex >= allBeers.length - 1) {
                return;
            }
        }

        //set the current page of beers
        const newStartIndex = startIndex + 5;
        setStartIndex(newStartIndex);
        const newEndIndex = endIndex + 5;
        setEndIndex(newEndIndex);
        if (filteredBeers) {
            const beers = filteredBeers.slice(newStartIndex, newEndIndex);
            setVisibleBeers(beers);
        } else {
            const beers = allBeers.slice(newStartIndex, newEndIndex);
            setVisibleBeers(beers);
        }
    }

    const onClickPreviousBeers = () => {
        if (startIndex === 0) {
            return;
        }
        const newStartIndex = startIndex - 5;
        setStartIndex(newStartIndex);
        const newEndIndex = endIndex - 5;
        setEndIndex(newEndIndex);
        const filteredBeers = allBeers.slice(newStartIndex, newEndIndex);
        setVisibleBeers(filteredBeers);
    }

    const minAbvInput = (e) => {
        setMinAbv(parseFloat(e.target.value));
    }

    const maxAbvInput = (e) => {
        setMaxAbv(parseFloat(e.target.value));
    }

    const search = () => {
        const newBeers = allBeers.filter(beer => beer.abv < maxAbv &&  beer.abv > minAbv);
        setFilteredBeers(newBeers);
        const slicedBeers = newBeers.slice(startIndex,endIndex);
        setVisibleBeers(slicedBeers);
    }

    const reset = () => {
        setFilteredBeers(allBeers);
        const firstPageOfBeers = allBeers.slice(0,5);
        setVisibleBeers(firstPageOfBeers);
        //clear search input fields
        setMinAbv("");
        setMaxAbv("");
    }

    const onClickShowCarousel = () => {
        setIsVisible(true);
    }

    const onClickHideCarousel = () => {
        setIsVisible(false);
    }

    const Content = () => {
        let onLastPage = false;
        //handle last page
        if (filteredBeers) {
            if(endIndex >= filteredBeers.length - 1) {
                onLastPage = true;
            }
        } else {
            if (endIndex >= allBeers.length - 1) {
                onLastPage = true;
            }
        }
        return (
            <div className="carousel-container">
                <div className={`${startIndex === 0 ? "disabled" : ""} left-arrow`} onClick={onClickPreviousBeers}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                {visibleBeers && visibleBeers.map((beer) => <Beer key={beer.name} beer={beer}/> )}
                <div className={`${onLastPage ? "disabled" : ""} right-arrow`} onClick={onClickNextBeers}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        )
    }
    
    return (
        <div className="carousel">
            <div className="abv-search">
                <h4>Enter mininum ABV</h4>
                <input onChange={minAbvInput} value={minAbv}></input> 
                <h4>Enter maximum ABV</h4>
                <input onChange={maxAbvInput} value={maxAbv}></input>
            </div>
            <div className="carousel btn">
                <button onClick={search}>Search</button>
                <button onClick={reset}>Reset</button>
            </div>
             <h2>Carousel</h2>
             {isVisible ? (
                 <Fragment>
                     <span onClick={onClickHideCarousel}>Hide Carousel</span>
                        <Content />
                 </Fragment>
             ) : <span onClick={onClickShowCarousel}>Show Carousel</span>}
        </div>
    );
}

export default Carousel;