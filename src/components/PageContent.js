import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

function PageContent(props) {
  const { children } = props
  return <div className="page-content">{children}</div>
}

export default PageContent

PageContent.propTypes = {
  children: PropTypes.node,
}
