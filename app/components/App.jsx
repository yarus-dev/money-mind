import { Fragment, Suspense } from "react";
import styled from "styled-components";
import { token } from '../utils/theme'

const Wrapper = styled.div`
    background-color: ${token('colors.persianGreen')};
    font-size: 3rem;
`

export function App () {
    return (
        <Wrapper>
            App
        </Wrapper>
    )
}