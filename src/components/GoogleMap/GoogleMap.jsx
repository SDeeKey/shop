import './GoogleMap.scss'

import { Wrapper } from "@googlemaps/react-wrapper";

const GoogleMap = () => (
    <Wrapper apiKey={"YOUR_API_KEY"}>
        <MyMapComponent />
    </Wrapper>
);

export default GoogleMap;