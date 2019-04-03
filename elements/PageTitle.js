/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const PageTitle = ({ children }) => (
  <h1
    css={css`
      font-size: 3rem;
      margin: 0 0 4rem;
      ${'' /* color: #e28935; */}
    `}
  >{children}</h1>
)

export default PageTitle
