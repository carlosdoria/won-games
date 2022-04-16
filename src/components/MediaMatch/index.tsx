import styled, { css } from "styled-components"
import media, { DefaultBreakpoints } from "styled-media-query"

type breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  graterThan?: breakpoint
  lessThan?: breakpoint
}

const MediaMatchModifiers = {
  lessThan: (size: breakpoint) =>  css`
    ${media.lessThan(size)`
      display: block
    `}
  `,

  graterThan: (size: breakpoint) =>  css`
    ${media.greaterThan(size)`
      display: block
    `}
  `
}

export const MediaMatch = styled.div<MediaMatchProps>`
  ${({ lessThan, graterThan }) => css`
    display: none;

    ${!!lessThan && MediaMatchModifiers.lessThan(lessThan) }
    ${!!graterThan && MediaMatchModifiers.graterThan(graterThan) }
  `}
`
