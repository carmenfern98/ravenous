/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled/macro";

const SpinnerContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 10vh;
`

const Spinner = styled.div`
border: 4px solid transparent;
border-top: 3px solid #ad3a37;
border-radius: 50%;
width: 40px;
height: 40px;
animation: spin 1s linear infinite;

@keyframes spin {
0% { transform: rotate(0deg); }
100%{ transform: rotate(360deg); }
}
`

export const LoadingSpinner = () => {
    return (
        <SpinnerContainer>
            <Spinner />
        </SpinnerContainer>
    );
};
