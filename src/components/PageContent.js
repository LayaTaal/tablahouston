import React from 'react'
import styled from 'styled-components'

function PageContent(props) {
  const { children } = props
  return <div className="page-content">{children}</div>
}

export default PageContent
