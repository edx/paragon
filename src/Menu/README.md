---
title: 'Menu'
type: 'component'
components:
- Menu
categories:
- Navigation
- Buttonlike
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: ''
---

### Menu

```jsx live
() => {
  return (
    <Menu>
      <MenuItem iconBefore={Add}>New Item</MenuItem>
      <MenuItem iconAfter={Check}>New Item</MenuItem>
      <MenuItem disabled>New Item</MenuItem>
      <MenuItem>New Item</MenuItem>
    </Menu>
  );
}
```

```jsx live
() => {
  return (
    <Menu>
      <Form.Control />
      <Form.Group>
        <Form.Label>Which Color?</Form.Label>
        <Form.CheckboxSet
          name="color-two"
          onChange={(e) => console.log(e.target.value)}
          defaultValue={['green']}
        >
          <Form.Checkbox value="red">Red</Form.Checkbox>
          <Form.Checkbox value="green">Green</Form.Checkbox>
          <Form.Checkbox value="blue">Blue</Form.Checkbox>
          <Form.Checkbox value="cyan" disabled>Cyan</Form.Checkbox>
        </Form.CheckboxSet>
      </Form.Group>

      <MenuItem icon={Add}>New Item</MenuItem>
      <MenuItem icon={Add}>New Item</MenuItem>
      <MenuItem icon={Add}>New Item</MenuItem>
      <MenuItem icon={Add}>New Item</MenuItem>
    </Menu>
  );
}
```