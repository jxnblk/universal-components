
const h = require('hyperscript').context()
const addPx = require('add-px-to-style')

const parseValue = (prop, val) => typeof val === 'number' ? addPx(prop, val) : val
const kebab = (str) => str.replace(/([A-Z])/g, g => '-' + g.toLowerCase())

const transformProps = (props) => {
  if (props.style && typeof props.style === 'object') {
    Object.keys(props.style)
      .forEach(key => {
        const kebabkey = kebab(key)
        props.style[kebabkey] = parseValue(key, props.style[key])
        if (kebabkey !== key) {
          delete props.style[key]
        }
      })
  }

  for (let key in props) {
    if (/^on/.test(key)) {
      const lowerkey = key.toLowerCase()
      if (lowerkey !== key) {
        props[lowerkey] = props[key]
        delete props[key]
      }
    }
  }
  return props
}

module.exports = (tag, props, ...children) => {
  if (props && props.children) {
    children = props.children
    delete props.children
  }

  props = transformProps(props || {})

  if (typeof tag === 'function') {
    props.children = children
    return tag(props, ...children)
  }
  return h(tag, props, ...children)
}

