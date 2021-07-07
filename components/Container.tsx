import React from 'react';
import styled from 'styled-components';

const Container = () => {
    const Container = styled.div`
        background-color: red;
    `;

    const Test2 = styled.span`
        background-color: green;
    `;

    return (
        <Container>
            test and <Test2>asdsads</Test2>
        </Container>
    );
};

export default Container;
