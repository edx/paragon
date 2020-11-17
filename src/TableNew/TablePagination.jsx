import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const TablePagination = ({
  previousPage, nextPage, canPreviousPage, canNextPage, pageIndex, totalPages,
}) => (
  <div className="pagination">
    <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
      {'<'}
    </Button>
    <Button onClick={() => nextPage()} disabled={!canNextPage}>
      {'>'}
    </Button>
    <span>
      Page{' '}
      <strong>
        {pageIndex + 1} of {totalPages}
      </strong>{' '}
    </span>
  </div>
);

TablePagination.propTypes = {
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  canPreviousPage: PropTypes.bool.isRequired,
  canNextPage: PropTypes.bool.isRequired,
  pageIndex: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default TablePagination;
