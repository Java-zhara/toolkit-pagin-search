import { useMemo } from 'react';
import classNames from 'classnames';

import './Pagination.css';

interface IPagination {
  currentPage: number;
  totalElements: number;
  getPaginate: (num: number) => void;
}

export const Pagination = ({ currentPage, totalElements, getPaginate }: IPagination): JSX.Element => {
  const pageNumber = useMemo((): number[] => {
    const numbers: number[] = [];
    for (let i = 0; i < Math.ceil(totalElements / 10); i += 1) {
      numbers.push(i + 1);
    }
    return numbers;
  }, [totalElements]);

  return (
    <div className='pagination'>
      {pageNumber.map((num) => (
        <button
          type='button'
          key={num}
          onClick={() => getPaginate(num)}
          className={classNames('page-btn', {
            active: num === currentPage,
          })}
        >
          {num}
        </button>
      ))}
    </div>
  );
};
