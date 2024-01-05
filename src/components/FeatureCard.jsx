import React from 'react';
import { Link } from 'react-router-dom';

export const FeatureCard = ({ icon, title, description, linkTo }) => {
  return (
    <Link to={linkTo} className="group">
      <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 transition-transform hover:shadow-md">
        <div className="md:flex md:items-start md:-mx-4">
          <span className="inline-block p-2  bg-blue-100 rounded-xl md:mx-4 dark:text-white ">
            {icon}
          </span>

          <div className="mt-4 md:mx-4 md:mt-0">
            <h1 className="text-xl font-medium text-gray-700 capitalize dark:text-white">{title}</h1>

            <p className="mt-3 text-gray-500 dark:text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
