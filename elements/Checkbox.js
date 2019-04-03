/** @jsx jsx */
import { jsx, css } from "@emotion/core"

const Checkbox = ({ name, label, isChecked = false, onChange }) => {
  return (
    <div className="checklist-checkbox"
      css={css`
        & + .checklist-checkbox {
          margin-top: 1.5rem;
        }
      `}
    >
      <label htmlFor={name} id={name} css={css`
        display: flex;
        align-items: center;
      `}>
        <input
          name={name}
          type="checkbox"
          checked={ isChecked }
          onChange={onChange}
          css={css`
            -webkit-appearance: none;
            width: 20px;
            height: 20px;
            background: white;
            border: 1px solid #002C3E;
            border-radius: 3px;
            outline: none;
            margin: 0;
            cursor: pointer;
            transition: all 250ms ease-in-out;
            &:checked {
              background: #f50c68;
              box-shadow: inset 0 0 0 4px white;
            }
          `}
        />
        <span
          css={css`
            font-weight: bold;
            margin-left: 0.75rem;
          `}
        >{ label }</span>
      </label>
    </div>
  )
}

export default Checkbox
