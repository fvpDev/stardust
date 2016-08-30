import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function FeedDate(props) {
  const { children, className, content } = props
  const classes = cx(className, 'date')
  const rest = getUnhandledProps(FeedDate, props)
  const ElementType = getElementType(FeedDate, props)

  return <ElementType {...rest} className={classes}>{children || content}</ElementType>
}

FeedDate._meta = {
  name: 'FeedDate',
  parent: 'Feed',
  type: META.TYPES.VIEW,
}

FeedDate.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the FeedDate. Mutually exclusive with the date prop. */
  children: customPropTypes.every([
    customPropTypes.disallow(['date']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedDate className. */
  className: PropTypes.string,

  /** Shorthand for primary content of the FeedDate. */
  content: customPropTypes.shorthand,
}

export default FeedDate
