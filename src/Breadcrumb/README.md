---
title: 'Breadcrumbs'
type: 'component'
components:
- Breadcrumb
categories:
- Navigation
status: 'Needs Work'
designStatus: 'DONE'
devStatus: 'To Do'
notes: |
  Replace with react-bootstrap shim
---

### Basic Usage

```jsx live
<Breadcrumb
  links={[
    { label: 'Link 1', url: '/link-1' },
    { label: 'Link 2', url: '/link-2' },
    { label: 'Link 3', url: '/link-3' },
  ]}
/>
```

### With active label

```jsx live
<Breadcrumb
  links={[
    { label: 'Link 1', url: '/link-1' },
    { label: 'Link 2', url: '/link-2' },
    { label: 'Link 3', url: '/link-3' },
  ]}
  activeLabel="Link 4"
/>
```

### With custom spacer

```jsx live
<Breadcrumb
  links={[
    { label: 'Link 1', url: '/link-1' },
    { label: 'Link 2', url: '/link-2' },
    { label: 'Link 3', url: '/link-3' },
  ]}
  spacer={<span className="custom-spacer">/</span>}
/>
```
