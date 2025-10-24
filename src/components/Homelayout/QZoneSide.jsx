import React from 'react';
import Swimming from '../../assets/swimming.png'
import Class from '../../assets/class.png'
import Play from '../../assets/playground.png'

const QZoneSide = () => {
    return (
        <div className='bg-base-200 p-3' >
             <h2 className=' font-bold mb-5'>QZone</h2>
             <div className=' space-y-5'>
                <img src={Swimming} alt="" /><img src={Class}alt="" /><img src={Play} alt="" />
             </div>
        </div>
    );
};

export default QZoneSide;