import React from 'react'

import { customPropTypes, getElementType, META } from '../../lib'
import { Checkbox } from '../../modules'

/**
 * A <Radio /> is sugar for <Checkbox type='radio' inputType='radio' />.
 * Useful for exclusive groups of type='slider' or type='toggle'.
 * @see Checkbox
 */
function Radio(props) {
  const ElementType = getElementType(Radio, props)
  return <ElementType {...props} type='radio' inputType='radio' />
}

Radio._meta = {
  name: 'Radio',
  type: META.TYPES.ADDON,
}

Radio.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,
}

Radio.defaultProps = {
  as: Checkbox,
}

export default Radio
