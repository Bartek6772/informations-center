import { React } from 'react';
import Element from './../../containers/Element/Element';
import './Title.scss';

const Title = (props) => {
    return(
        <Element sizeX={9} sizeY={1} name="title">
            <h1>Informations Center</h1>
        </Element>
    )
}

export default Title;