/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Container = ({ children }) => (
  <div
    css={css`
      width: 100%;
      max-width: 800px;
      padding: 0 20px;
      margin: 0 auto;
    `}
  >{children}</div>
)

export default Container
