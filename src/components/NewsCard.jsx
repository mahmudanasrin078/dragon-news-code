import React from "react";
import { FaStar, FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {id, title, rating, total_view, author, thumbnail_url, details } =
    news;

  const publishedDate = new Date(news.author.published_date).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden">
      {/* Author Info */}
      <div className="flex justify-between items-center px-5 py-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover border"
          />
          <div>
            <h3 className="font-semibold">{author.name}</h3>
            <p className="text-sm text-gray-500">{publishedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* News Title */}
      <h2 className="px-5 text-lg font-semibold leading-snug mb-2">{title}</h2>

      {/* Image */}
      <figure className="px-5 mb-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-5 text-sm text-gray-600 mb-4">
        {details.slice(0, 220)}...
        <Link to={`/news-details/${id}`} className="text-primary font-semibold cursor-pointer">
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t px-5 py-4">
        {/* Rating */}
        <div className="flex items-center gap-1 text-warning">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "text-warning" : "text-gray-300"}
            />
          ))}
          <span className="text-gray-700 font-semibold ml-1">
            {rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center text-gray-500 gap-2">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
