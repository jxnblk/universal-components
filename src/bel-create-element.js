
const createElement = require('bel').createElement
const addPx = require('add-px-to-style')

const parseValue = (prop, val) => typeof val === 'number' ? addPx(prop, val) : val
const kebab = (str) => str.replace(/([A-Z])/g, g => '-' + g.toLowerCase())
const styleToString = (style) => {
  return Object.keys(style)
    .filter(key => style[key] !== null)
    .map(key => `${kebab(key)}:${parseValue(key, style[key])}`)
    .join(';')
}

const transformProps = (props) => {
  if (props.style && typeof props.style === 'object') {
    props.style = styleToString(props.style)
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

const h = (tag, props = {}, ...children) => {
  if (props && props.children) {
    children = props.children
    delete props.children
  }

  props = transformProps(props || {})

  if (typeof tag === 'function') {
    props = props || {}
    props.children = children
    const root = tag(props, ...children)
    return root
  }

  return createElement(tag, props || {}, children)
}
module.exports = h
