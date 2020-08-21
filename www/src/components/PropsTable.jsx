import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';


let lastIds = {};

const newId = (prefix = 'id') => {
  if (lastIds[prefix]) {
    lastIds[prefix] += 1
  } else {
    lastIds[prefix] = 1
  }
  return `${prefix}${lastIds[prefix]}`;
};

const renderType = ({ name, value }) => { // eslint-disable-line
  switch (name) {
    case 'shape':
      return <ShapeProp shape={value} />;
    case 'union':
      return <span key={newId(name)}>{value.map(v => renderType(v))}</span>;
    case 'arrayOf':
      return <span key={newId(name)}>[ {renderType(value)} ]</span>;
    case 'enum':
      return (
        <span key={newId(name)}>
          <span className="base-type">{name}</span>:
          {typeof value === 'string' ? value : value.map(item => item.value).join(', ')}
        </span>
      );
    default:
      return <span key={newId(name)} className="base-type">{name}</span>;
  }
};


const ShapeProp = ({ shape }) => (
  <React.Fragment>
    {'{'}
    {Object.entries(shape).map(([k, v]) => (
      <span key={k} className="d-block ml-3">{k}: {renderType(v)},</span>
    ))}
    {'}'}
  </React.Fragment>
);

ShapeProp.propTypes = {
  shape: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

ShapeProp.defaultProps = {
  shape: {},
};


const PropsTable = (props) => {
  const { propMetaData = [], ..._props } = props;

  return (
    <table className="table w-100" {..._props}>
      <thead>
        <tr>
          <th>Prop Name</th>
          <th>Type</th>
          <th>Required</th>
          <th>Default Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(propMetaData).map((key) => {
          const {
            name, type, required, defaultValue, description,
          } = propMetaData[key];
          return (
            <tr key={key}>
              <td>
                <span className="d-block">{name}</span>
                {description ? <ReactMarkdown className="text-muted mb-0">{description.text}</ReactMarkdown> : null}
              </td>
              <td>{type ? renderType(type) : ''}</td>
              <td>{required ? 'required' : 'optional'}</td>
              <td>{defaultValue ? defaultValue.value : null}</td>

            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

PropsTable.propTypes = {
  /** this is the `metadata.props` field of what metadata you get from the react-docgen-loader.  */
  propMetaData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]) // eslint-disable-line react/forbid-prop-types
};

PropsTable.defaultProps = {
  propMetaData: {},
};

export default PropsTable;
