import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import { createIcon, createImg } from '../../factories'

function FeedLabel(props) {
  const { children, className, content, icon, image } = props
  const classes = cx(className, 'label')
  const rest = getUnhandledProps(FeedLabel, props)
  const ElementType = getElementType(FeedLabel, props)

  if (children) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  return (
    <ElementType {...rest} className={classes}>
      {content}
      {createIcon(icon)}
      {createImg(image)}
    </ElementType>
  )
}

FeedLabel._meta = {
  name: 'FeedLabel',
  parent: 'Feed',
  type: META.TYPES.VIEW,
}

FeedLabel.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the FeedLabel. Mutually exclusive with all shorthand props. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content', 'icon', 'image']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedLabel className. */
  className: PropTypes.string,

  /** Primary content of the FeedLabel. Mutually exclusive with children. */
  content: customPropTypes.shorthand,

  /** An event can contain icon label. Mutually exclusive with children. */
  icon: customPropTypes.icon,

  /** An event can contain image label. Mutually exclusive with children. */
  image: customPropTypes.image,
}

export default FeedLabel
