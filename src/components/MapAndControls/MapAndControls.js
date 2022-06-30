import {Tiles} from '../Tiles/Tiles';
import {Sprites} from '../Sprites/Sprites';
import { SuccessMessage } from '../SuccessMessage/SuccessMessage';
import './MapAndControls.css';



export const MapAndControls = (props) => {
    return (
        <div id="map-and-controls">
            <div id="game-map-1" class="game-map">
                <Tiles />
                <Sprites />
                <SuccessMessage />
            </div>
            <p id="text-1" class="text">
                Use cursor keys or buttons.
            </p>
        </div>    
    )
}
