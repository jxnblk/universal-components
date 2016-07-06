
import Button from './Button'

const handleClick = lib => e => {
  console.log('Hello', lib)
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
