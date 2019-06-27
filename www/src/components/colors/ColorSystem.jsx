import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const utilityClasses = {
  bg: (color, level) => (level ? `bg-${color}-${level}` : `bg-${color}`),
  border: (color, level) => (level ? `border-${color}-${level}` : `border-${color}`),
  text: (color, level) => (level ? `text-${color}-${level}` : `text-${color}`),
};

const colors = [
  { themeName: 'gray', color: 'gray', unusedLevels: [] },
  { themeName: 'primary', color: 'blue', unusedLevels: [] },
  { themeName: 'success', color: 'green', unusedLevels: [] },
  { themeName: 'info', color: 'teal', unusedLevels: [] },
  { themeName: 'danger', color: 'red', unusedLevels: [] },
  { themeName: 'warning', color: 'yellow', unusedLevels: [500, 700, 900] },
];

const levels = [
  { level: 100, use: 'Backgrounds' },
  { level: 200, use: 'Borders & Lines' },
  { level: 300, use: 'Icons & Semantic State' },
  { level: 500, use: 'Lighter Text & Element Fills' },
  { level: 700, use: 'Regular Text & Hover State' },
  { level: 900, use: 'Darker Text & Active State' },
];

const selectorColors = {};

function parseColors(cssSelectors) {
  const colorsAreParsed = Object.keys(selectorColors).length !== 0;
  if (colorsAreParsed) return;

  cssSelectors.forEach(({ selector, declarations }) => {
    // All fit this shape: "background-color: #fff !important;"
    const declarationFragments = declarations[0].split(' ');
    selectorColors[selector] = declarationFragments.length ? declarationFragments[1] : null;
  });
}

// eslint-disable-next-line import/prefer-default-export
export default function ColorSystem({ cssSelectors }) {
  parseColors(cssSelectors);

  return (
    <div>
      <h3>Pallete</h3>
      <p>
        Below is an exhaustive set of UI colors. Colors for brands,
        illustrations, or graphics are not included.
      </p>

      {levels.map(({ level, use }) => (
        <div>
          <h6 className="text-muted text-uppercase mb-3 font-weight-normal">
            <strong className="mr-2">{level}</strong> {use}
          </h6>
          <div className="d-flex">
            {colors.map(({ themeName, unusedLevels }) => (
              <div className="mr-3 mb-4 w-100">
                <div
                  className={classNames(
                    'pgn-doc__swatch',
                    utilityClasses.bg(themeName, level),
                    {
                      'unused-level': unusedLevels.includes(level),
                    },
                  )}
                />
                {unusedLevels.includes(level) ? null : (
                  <div style={{ lineHeight: 1 }} className="mt-1">
                    <code className="mb-0 d-block text-lowercase text-gray-700">
                      ${themeName}-{level}
                    </code>
                    <code
                      style={{ fontSize: '65%' }}
                      className="text-black-50 text-lowercase"
                    >
                      {selectorColors[utilityClasses.bg(themeName, level)]}
                    </code>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}


      <h3>SCSS Variables and CSS Class Utilties</h3>
      <p>Utility classes for backgrounds, borders, and text colors follow the format below:</p>
      <p><code>{'.{use}-{color}-{level}'}</code></p>
      <table className="table w-50">
        <thead>
          <tr>
            <th>Use</th>
            <th>Color</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="align-top pr-4">
              <code>bg-</code><br />
              <code>border-</code><br />
              <code>text-</code><br />
            </td>
            <td className="align-top pr-4">
              {colors.map(({ themeName }) => <code className="d-block">{themeName}-</code>)}
            </td>
            <td className="align-top pr-4">
              {levels.map(({ level }) => <code className="d-block">{level}</code>)}
            </td>
          </tr>
        </tbody>
      </table>


      <h3>Background Fills</h3>
      <div className="d-flex flex-wrap">
        {colors.map(({ themeName }) => (
          <div style={{ flexBasis: '33%' }}>
            <div className="mr-3 mb-3">
              <div className={classNames('p-3 rounded', utilityClasses.bg(themeName, 100))}>
                <code style={{ color: 'inherit' }}>.{utilityClasses.bg(themeName, 100)}</code>
              </div>
            </div>
          </div>
        ))}
      </div>


      <h3>Borders & Lines</h3>
      <div className="d-flex flex-wrap">
        {colors.map(({ themeName }) => (
          <div style={{ flexBasis: '33%' }}>
            <div className="mr-3 mb-3">
              <div
                className={classNames('p-3 rounded border', utilityClasses.border(themeName, 200))}
              >
                <code style={{ color: 'inherit' }}>.{utilityClasses.border(themeName, 200)}</code>
              </div>
            </div>
          </div>
        ))}
      </div>


      <h3>Icons & Semantic Lines</h3>
      <div className="d-flex flex-wrap">
        {colors.map(({ themeName }) => (
          <div style={{ flexBasis: '33%' }}>
            <div className="mr-3 mb-3">
              <div
                className={classNames('p-3 rounded border', utilityClasses.border(themeName, 300))}
              >
                <code style={{ color: 'inherit' }}>.{utilityClasses.border(themeName, 300)}</code>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3>Text</h3>
      <p>Color levels 500 and above are accessible on white and 100 level backgrounds.</p>
      <div className="d-flex rounded overflow-hidden mb-3">
        <h6 className="mb-0 w-100">Lighter Text</h6>
        <h6 className="mb-0 w-100">Regular Text</h6>
        <h6 className="mb-0 w-100">Darker Text</h6>
      </div>
      <div className="d-flex">
        {[500, 700, 900].map(level => (
          <div style={{ flexBasis: '33%' }}>
            {colors.map(({ themeName, unusedLevels }) => {
              if (unusedLevels.includes(level)) return null;
              return (
                <code
                  className={classNames(
                    'd-block',
                    utilityClasses.text(themeName, level),
                  )}
                >
                  .{utilityClasses.text(themeName, level)}
                </code>
              );
            })}
          </div>
        ))}
      </div>

      <h3>Element Fills</h3>
      <p>Buttons or other interactive elements.</p>
      <div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <div className="w-100">
            <h6 className="mb-0">Default State</h6>
          </div>
          <div className="w-100">
            <h6 className="mb-0">Hover State</h6>
          </div>
          <div className="w-100">
            <h6 className="mb-0">Active State</h6>
          </div>
        </div>
        {colors.map(({ themeName }) => {
          if (themeName === 'warning') return null;
          return (
            <div className="d-flex rounded overflow-hidden mb-3">
              <div
                className={classNames(
                  'p-3 w-100',
                  utilityClasses.bg(themeName, 500),
                  {
                    'text-white': themeName !== 'light',
                  },
                )}
              >
                <code style={{ color: 'inherit' }}>.{utilityClasses.bg(themeName, 500)}</code>
              </div>
              <div
                className={classNames(
                  'p-3 w-100',
                  utilityClasses.bg(themeName, 700),
                  {
                    'text-white': themeName !== 'light',
                  },
                )}
              >
                <code style={{ color: 'inherit' }}>.{utilityClasses.bg(themeName, 700)}</code>
              </div>
              <div
                className={classNames(
                  'p-3 w-100',
                  utilityClasses.bg(themeName, 900),
                  {
                    'text-white': themeName !== 'light',
                  },
                )}
              >
                <code style={{ color: 'inherit' }}>.{utilityClasses.bg(themeName, 900)}</code>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

ColorSystem.propTypes = {
  cssSelectors: PropTypes.arrayOf(PropTypes.shape({
    selector: PropTypes.string,
    declarations: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
};