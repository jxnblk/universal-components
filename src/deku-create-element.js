
// Not working

const h = require('deku').element

module.exports = (tag, props, ...children) => {
  if (!children) {
    console.log('children', children)
  }
  if (typeof tag === 'function') {
    return {
      render: tag // ({ ...props, ...children })
    }
  }

  return h(tag, props, ...children)
}

