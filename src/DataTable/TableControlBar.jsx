import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BulkActions from './BulkActions';
import SmartStatus from './SmartStatus';
import DropdownFilters from './DropdownFilters';
import { TableContext } from './TableContext';

// handles layout for filters, status, and bulk actions
const TableControlBar = ({
  bulkActions, tableName, itemCount, className, noOfBreakoutFilters, ...rest
}) => {
  const instance = useContext(TableContext).getTableInstance(tableName);
  const {
    setFilter,
  } = instance;

  return (
    <div className={classNames('pgn__data-table-status-bar', className)}>
      {/* Using setFilter as a proxy for isFilterable */}
      {setFilter && (
      <div className="pgn__data-table-actions">
        <div className="pgn__data-table-actions-left">
          <DropdownFilters noOfBreakoutFilters={noOfBreakoutFilters} tableName={tableName} />
        </div>
        <div className="pgn__data-table-actions-right">
          {bulkActions.length > 0 && (
            <BulkActions
              actions={bulkActions}
              tableName={tableName}
              {...rest}
            />
          )}
        </div>
      </div>
      )}
      <div className="pgn__data-table-status">
        <div className="pgn__data-table-status-left">
          <SmartStatus
            itemCount={itemCount}
            tableName={tableName}
            {...rest}
          />
        </div>
        {!setFilter && (
          <BulkActions
            actions={bulkActions}
            tableName={tableName}
            {...rest}
          />
        )}
      </div>
    </div>
  );
};

TableControlBar.defaultProps = {
  bulkActions: [],
  className: null,
  noOfBreakoutFilters: 1,
};

TableControlBar.propTypes = {
  /** Actions to be performed on the table. isSelectable must be true to use bulk actions */
  bulkActions: PropTypes.arrayOf(PropTypes.shape({
    /** Text displayed to the user for each action */
    buttonText: PropTypes.string.isRequired,
    /** Click handler for the action; it will be passed the selected rows */
    handleClick: PropTypes.func.isRequired,
  })),
  itemCount: PropTypes.number.isRequired,
  className: PropTypes.string,
  /** Number between one and four filters that can be shown on the top row. */
  noOfBreakoutFilters: PropTypes.oneOf([1, 2, 3, 4]),
  tableName: PropTypes.string.isRequired,
};

export default TableControlBar;
