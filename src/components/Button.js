import { css, cx } from "linaria"
import React from "react"
import { colors } from "../styles/styleObjects/colors"
import { text } from "../styles/styleObjects/text"

const buttonSty = css`
  ${text.complete.sm};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid ${colors.line.light};
  margin-bottom: -1px;
  gap: 4px;
  cursor: pointer;
  div.text {
    display: flex;
    flex-grow: 1;
    color: ${colors.black.secondary};
  }
  div.icon {
    display: flex;
    color: ${colors.black.barely};
  }
  @media (hover: hover) {
    :hover {
      border-bottom: 1px solid ${colors.line.dark};
      div.text {
        color: ${colors.black.primary};
      }
      div.icon {
        color: ${colors.black.primary};
      }
    }
  }

  :active {
    border-bottom: 1px solid ${colors.line.light};
    div.text {
      color: ${colors.black.secondary};
    }
    div.icon {
      color: ${colors.black.secondary};
    }
  }
`

// Options
const dark = css`
  border-bottom: 1px solid #494949;
  div.text {
    color: white;
  }
  @media (hover: hover) {
    :hover {
      border-bottom: 1px solid #808080;
    }
  }

  :active {
    border-bottom: 1px solid #494949;
    div.text {
      color: #b5b5b5;
    }
  }
`
const alwaysPrimaryText = css`
  div.text {
    color: ${colors.black.primary};
  }
`
const fullWidth = css`
  justify-content: space-between;
  width: 100%;
`
const noUnderline = css`
  border: none;
  color: inherit;
  @media (hover: hover) {
    :hover {
      border: none;
      color: inherit;
    }
  }
  :active {
    border: none;
  }
`

export default function Button({
  children,
  isLightbox,
  isFullWidth,
  isNoUnderline,
  isDisabled,
  isBlack,
  onClick,
}) {
  return (
    <button
      className={cx(
        buttonSty,
        isLightbox && dark,
        isFullWidth && fullWidth,
        isNoUnderline && noUnderline,
        isBlack && alwaysPrimaryText
      )}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
