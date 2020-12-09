import React, {Component} from 'react';
import './pagination.styles.scss';

class Pagination extends Component {
    constructor(props) {
        super(props);

        this.sliderRef = React.createRef();
        this.containerRef = React.createRef();

        this.state = {
            sliderPosition: 6 //because of the margin
        }
    }

    componentDidMount() {
        const slider = getComputedStyle(this.sliderRef.current)

        this.setState({sliderPosition: slider.left});

        //kinda useless apparently
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.done !== this.props.done) {
            const container = this.containerRef.current
            container.className += " active";
        }
    }

    handleClick = (pageNr, position) => {
        this.props.paginate(pageNr);

        this.setState({sliderPosition: position});
    }


    render() {
        const pageNumbers = [];

        for(let i = 1; i <= Math.ceil(this.props.totalItems / this.props.itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        let slider = {
            left: this.state.sliderPosition
        }

        return (
            <nav className='nav-container'>
                <ul className="pagination-container" ref={this.containerRef}>
                    <div className="slider" ref = {this.sliderRef} style={slider}/>
                    {pageNumbers.map(pageNr => (
                        <li key={pageNr} className="page-item">
                            <a
                                onClick={(e) => {this.handleClick(pageNr, e.currentTarget.offsetLeft)}}
                                href="#"
                                className="page-link"
                            >
                                <span>{pageNr}</span>
                            </a>
                        </li>
                    ))}
                    <svg style={{display: "none"}}>
                        <defs>
                            <filter id="fancy-goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -10" result="goo" />
                                <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                            </filter>
                        </defs>
                    </svg>
                </ul>
            </nav>
        );
    }
}

export default Pagination;