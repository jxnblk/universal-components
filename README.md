
# Universal Components

An experiment in creating library-agnostic universal functional UI components

http://jxnblk.com/universal-components

```sh
npm i
npm run build
```

This repo has two generic functional UI components in the [`/components`](/components) folder.

```js
// Button.js
const sx = {
  fontFamily: 'inherit',
  fontSize: 14,
  display: 'inline-block',
  padding: 8,
  margin: 0,
  color: 'white',
  backgroundColor: 'black',
  border: 0,
  borderRadius: 3,
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  cursor: 'pointer'
}

const Button = ({ ...props }) => (
  <button {...props} style={sx} />
)

export default Button
```

```js
// Hello.js
import Button from './Button'

const handleClick = lib => e => {
  console.log('Hello', lib)
  alert(`Hello ${lib}`)
}

const Hello = ({ lib }) => {
  const sx = {
    root: {
      padding: 16,
      backgroundColor: '#f6f6f6'
    },
    heading: {
      marginTop: 0
    }
  }
  return (
    <div className={`${lib}-root`}
      style={sx.root}>
      <h1 style={sx.heading}>Hello {lib}</h1>
      <Button
        onClick={handleClick(lib)}>
        Click me
      </Button>
    </div>
  )
}

export default Hello
```

These components are rendered by four different libraries:

- React
- Preact
- Hyperscript
- Bel

---

### To do:

- [ ] Hook up a generic store

MIT License
