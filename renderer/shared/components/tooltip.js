import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import theme from '../theme'

export const Dim = PropTypes.oneOfType([PropTypes.string, PropTypes.number])

const Box = forwardRef(
  (
    {bg, m, margin, mx, my, p, padding, px, py, w, css: style, ...props},
    ref
  ) => {
    const marginProp = m || margin
    const paddingProp = p || padding
    return (
      <>
        <div style={style} ref={ref} {...props} />
        <style jsx>{`
          div {
            display: block;
            background: ${bg};
            margin: ${marginProp};
            margin-left: ${mx};
            margin-right: ${mx};
            margin-top: ${my};
            margin-bottom: ${my};
            padding: ${paddingProp};
            padding-left: ${px};
            padding-right: ${px};
            padding-top: ${py};
            padding-bottom: ${py};
            width: ${w};
          }
        `}</style>
      </>
    )
  }
)

Box.defaultProps = {
  ...theme.Box,
}

Box.propTypes = {
  bg: PropTypes.string,
  m: Dim,
  p: Dim,
  margin: Dim,
  mx: Dim,
  my: Dim,
  padding: Dim,
  px: Dim,
  py: Dim,
  w: Dim,
  // eslint-disable-next-line react/forbid-prop-types
  css: PropTypes.object,
}

export default Box