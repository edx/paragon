import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TableContext } from './TableContext';

const EmptyTable = ({ content, className, tableName }) => {
  const { rows } = useContext(TableContext).getTableInstance(tableName);
  if (!rows || rows.length > 1) { return null; }

  return (<div className={classNames('pgn__data-table-empty', className)}>{content}</div>);
};

EmptyTable.defaultProps = {
  className: null,
};

EmptyTable.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  tableName: PropTypes.string.isRequired,
};

export default EmptyTable;
