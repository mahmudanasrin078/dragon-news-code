import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    //console.log(news)
    return (
        <div>
           {/* news title */}
           <img className='w-full h-[350px] object-cover' src={news.image_url} alt="" />

           <h2 className='text-2xl font-semibold'>{news.title}</h2>
           <p>{news.details}</p>
           <Link className='btn btn-secondary ' to={`/category/${news.category_id}`}>Back to category</Link>
        </div>
    );
};

export default NewsDetailsCard;