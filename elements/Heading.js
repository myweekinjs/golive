/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Heading = ({ children }) => (
  <h3
    css={css`
      font-size: 0.875rem;
      text-transform: uppercase;
      margin: 0 0 2rem;
      color: #FFC62B;
    `}
  >{children}</h3>
)

export default Heading
