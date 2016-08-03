
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

const Button = ({ children, ...props }) => (
  <button {...props} style={sx} >{children}</button>
)

export default Button

