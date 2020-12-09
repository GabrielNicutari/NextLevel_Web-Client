import React from 'react';
import Lottie from 'react-lottie';
import * as loading from './assets/loading.json';
import * as done from './assets/done.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}

const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: done.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const Loading = ({loading}) => {
    return (
        <div style={{marginTop: '10rem'}}>
            {!loading ? (
                <Lottie options={defaultOptions} height={360} width={360} speed={2}/>
            ) : (
                <Lottie options={defaultOptions2} height={240} width={240} speed={1.5} />
            )}
        </div>
    )
}

export default Loading;