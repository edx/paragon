import { Link } from 'gatsby';
import React from 'react';

const menu = [
  {
    section: 'OVERVIEW',
    items: [
      { title: 'Getting Started', url: '/' },
      { title: 'Library Status', url: '/status' },
    ],
  },
  {
    section: 'FOUNDATIONS',
    items: [
      { title: 'Colors', url: '/foundations/colors' },
      { title: 'Typography', url: '/foundations/typography' },
      { title: 'Layout & Grid', url: '/foundations/layout' },
      { title: 'Spacing & Margins', url: '/foundations/spacing' },
      { title: 'Icons', url: '/foundations/icons' },
      { title: 'All Utilities', url: '/foundations/css-utilities' },
    ],
  },
  {
    section: 'COMPONENTS',
    items: [
      { title: 'Accordion (coming soon)', url: '/components/accordion' },
      { title: 'Alert', url: '/components/alert' },
      { title: 'Avatar', url: '/components/avatar' },
      { title: 'Avatar Button', url: '/components/avatar-button' },
      { title: 'Badge', url: '/components/badge' },
      { title: 'Breadcrumbs', url: '/components/breadcrumbs' },
      { title: 'Button', url: '/components/button' },
      { title: 'Button Group', url: '/components/button-group' },
      { title: 'Carousel', url: '/components/carousel' },
      { title: 'Collapsible', url: '/components/collapsible' },
      { title: 'Dropdown', url: '/components/dropdown' },
      { title: 'Fieldset', url: '/components/fieldset' },
      { title: 'Figure', url: '/components/figure' },
      { title: 'Forms', url: '/components/forms' },
      { title: 'Hyperlink', url: '/components/hyperlink' },
      { title: 'Icon', url: '/components/icon' },
      { title: 'IconButton', url: '/components/icon-button' },
      { title: 'Input', url: '/components/input' },
      { title: 'Input Group', url: '/components/input-group' },
      { title: 'Image', url: '/components/image' },
      { title: 'Modal', url: '/components/modal' },
      { title: 'MailtoLink', url: '/components/mailtolink' },
      { title: 'Navs', url: '/components/navs' },
      { title: 'Navbar', url: '/components/navbar' },
      { title: 'Overlays', url: '/components/overlays' },
      { title: 'Pagination', url: '/components/pagination' },
      { title: 'Popover', url: '/components/popover' },
      { title: 'ProgressBar', url: '/components/progress-bar' },
      { title: 'Responsive', url: '/components/responsive' },
      { title: 'SearchField', url: '/components/searchfield' },
      { title: 'Spinner', url: '/components/spinner' },
      { title: 'StatefulButton', url: '/components/statefulbutton' },
      { title: 'Table', url: '/components/table' },
      { title: 'Tabs', url: '/components/tabs' },
      { title: 'Tooltip', url: '/components/tooltip' },
      { title: 'Toast', url: '/components/toast' },
      { title: 'TransitionReplace', url: '/components/transitionreplace' },
      { title: 'ValidationFormGroup', url: '/components/validationformgroup' },
    ],
  },
  {
    section: 'CARD',
    items: [
      { title: 'Card', url: '/card/card' },
      { title: 'Card: Image Cap', url: '/card/image-cap' },
      { title: 'Card: Header', url: '/card/header' },
      { title: 'Card: Section', url: '/card/section' },
      { title: 'Card: Divider', url: '/card/divider' },
      { title: 'Card: Footer', url: '/card/footer' },
    ]
  },
  {
    section: 'TABLE',
    items: [
      { title: 'DataTable', url: '/table/datatable' },
    ]
  },
  {
    section: 'HOOKS',
    items: [
      { title: 'useResizeDetector', url: '/hooks/useResizeDetector' },
      { title: 'useReversedChildren', url: '/hooks/useReversedChildren' },
      { title: 'useWindowSize', url: '/hooks/useWindowSize' },
    ],
  },
  {
    section: 'DEPRECATED',
    items: [
      { title: 'Checkbox', url: '/components/checkbox' },
      { title: 'CheckboxGroup', url: '/components/checkboxgroup' },
      { title: 'InputSelect', url: '/components/inputselect' },
      { title: 'InputText', url: '/components/inputtext' },
      { title: 'ListBox', url: '/components/listbox' },
      { title: 'RadioButtonGroup', url: '/components/radiobuttongroup' },
      { title: 'StatusAlert', url: '/components/statusalert' },
      { title: 'TextArea', url: '/components/textarea' },
    ],
  },
];


const Navigation = () => (
  <div className="pgn-doc__navigation">
    <div className="pgn-doc__navigation-slide">
      {menu.map(({ section, items }) => (
        <nav key={section} className="nav flex-column">
          <h3 className="pgn-doc__nav-section-header">
            {section}
          </h3>
          {items.map(({ title, url }) => (
            <Link
              key={title}
              activeClassName="active"
              className="nav-link"
              to={url}
            >
              {title}
            </Link>
          ))}
        </nav>
      ))}
    </div>
  </div>
);

export default Navigation;
