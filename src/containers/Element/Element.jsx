import { React } from 'react';
import './Element.scss';

const Element = (props) => {
    return(
        <div className={"element " + props.name} style={{
            gridColumn: "span " + props.sizeX,
            gridRow: "span " + props.sizeY
            }}>
            {props.children}
        </div>
    )
}

export default Element;