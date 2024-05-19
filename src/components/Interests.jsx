import React, { useRef, useEffect } from 'react';
import CustomTitle from './CustomTitle';
import hinata from '../assets/hinata.png';
import ball from '../assets/ball.png';
import plane from '../assets/plane.png';
import japan from '../assets/narutomaki.png';
import InterestBox from './InterestBox';

const Interests = () => {
    const [isTitleAnimationComplete, setIsTitleAnimationComplete] = React.useState(false);
    const interestsRef = useRef(null);

    useEffect(() => {
        if (isTitleAnimationComplete) {
            interestsRef.current.classList.add('fade-in');
        }
    }, [isTitleAnimationComplete]);

    return (
        <div
            name="Interests"
            className="flex items-center w-full flex-col bg-gradient-to-r from-background-color to-container-bg px-5 pt-20 relative"
        >
            <div className="flex flex-col w-full 2xl:w-2/3">
                <CustomTitle title='find -name "*interests*"' margin="12" onAnimationEnd={() => setIsTitleAnimationComplete(true)} />
                <div ref={interestsRef} className="opacity-0 p-4 mt-4">
                    <div className="hidden md:flex items-center inline relative /bg-indigo-500">
                        <div className="flex flex-col items-center mx-auto /bg-green-500">
                            <div className="flex items-center mx-2 /bg-green-500">
                                <img src={hinata} alt="Hinata" className="w-full /bg-pink-500"
                                    style={{ filter: 'drop-shadow(16px 16px 16px rgba(0, 0, 0, 0.25))' }}
                                />
                                <img
                                    src={ball}
                                    alt="Ball"
                                    className="w-36 mb-80 mx-2 animate-spin /bg-violet-500"
                                    style={{ filter: 'drop-shadow(8px 8px 8px rgba(0, 0, 0, 0.25))' }}
                                />
                            </div>
                            <p className='animate-swing text-white text-4xl font-bold'>Volley-ball</p>
                        </div>
                        <div className='mx-auto flex flex-col justify-end h-96 /bg-amber-500'>
                            <img
                                src={plane}
                                alt="Plane"
                                className="w-64 mt-60 animate-bounce"
                            />
                            <p className='animate-swing text-white text-4xl font-bold text-center'>Travelling</p>
                        </div>

                        <div className='mx-auto flex flex-col justify-end h-96 /bg-yellow-500'>
                            <img
                                src={japan}
                                alt="Japan"
                                className=" w-44 mt-60 animate-bounce"
                            />
                            <p className='animate-swing mt-12 text-white text-4xl font-bold text-center'>Japan</p>
                        </div>
                    </div>
                    <div className="md:hidden flex flex-col bg-gray-800/80 rounded-lg p-2">
                        <InterestBox title="Volley-ball" description="I play volley-ball every weeks." srcImage={ball} link="http://www.ffvb.org/" />
                        <InterestBox title="Travelling" description="I love travelling and discovering new places." srcImage={plane} link="https://www.lonelyplanet.com/" />
                        <InterestBox title="Japan" description="I love so much manga and food." srcImage={japan} link="https://www.japan.travel/en/" />
                    </div>
                </div>
            </div>
        </div >
    );

};

export default Interests;
