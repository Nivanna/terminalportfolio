import React from 'react';
import config from '../../config.json';

export const Ps1 = () => {
  return (
    <div className='md:text-sm text-[.9em]'>
      <span className="dark:text-black dark:font-bold dark:px-2 dark:py-1 dark:bg-green-500 dark:rounded-md">
        {config.ps1_username}
      </span>
      <span className="text-light-gray dark:text-green-500 dark:font-bold dark:ml-1">@{config.ps1_hostname}</span>
      <span className="text-light-gray dark:text-green-500">:$ </span>
    </div>
  );
};

export default Ps1;
