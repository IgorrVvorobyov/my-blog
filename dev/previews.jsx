import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import Home from "../pages";
import SocialNetworks from "../components/SocialNetworks";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Home">
                <Home/>
            </ComponentPreview>
            <ComponentPreview path="/SocialNetworks">
                <SocialNetworks/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;