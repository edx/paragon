---
title: 'Container'
type: 'component'
categories:
- Layout
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

The base container to contain, pad, and center content in the viewport. This component extends the React-Bootstrap Container

<a href="https://react-bootstrap.github.io/layout/grid/" target="_blank" rel="noopener noreferrer">
  See React-Bootstrap for more documentation.
</a>

### Basic Usage

```jsx live
<div style={{ width: '1500px', border: 'solid 3px red' }}>
<Container size="xl" className="bg-danger-300 my-4">
  The content in this container won't exceed the extra large width.
</Container>

<Container size="lg" className="bg-danger-300 mb-4">
  The content in this container won't exceed the large width.
</Container>

<Container size="md" className="bg-danger-300 mb-4">
  The content in this container won't exceed the medium width.
</Container>

<Container size="sm" className="bg-danger-300 mb-4">
  The content in this container won't exceed the small width.
</Container>

<Container size="xs" className="bg-danger-300 mb-4">
  The content in this container won't exceed the extra small width.
</Container>
</div>
```

### Theme variables (SCSS)

```
$max-width-xs: 464px !default;
$max-width-sm: 708px !default;
$max-width-md: 952px !default;
$max-width-lg: 1192px !default;
$max-width-xl: 1440px !default;
```
