/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Progress = ({ progression }) => {
  const trueCount = Object.keys(progression).filter(key => progression[key] === true).length
  const percentage = (trueCount / Object.keys(progression).length) * 100

  return (
    <div
      css={css`
        width: ${percentage}%;
        height: 2px;
        background: #FFC62B;
        transition: width 250ms ease-in-out;
        margin-top: 2rem;
      `}    
    ></div>
  )
}

export default Progress
