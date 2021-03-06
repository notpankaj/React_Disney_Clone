import styled from "styled-components"

function Viewer() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" />
            </Wrap>
        </Container>
    )
}

export default Viewer

const Container = styled.div`
    margin-top : 30px ;
    display: grid;
    padding: 30px 0 26px;
    grid-template-columns: repeat(5, minmax(0, 200px)) ;
    gap: 25px;
    justify-content: center;
`;

const Wrap = styled.div`

    border: 3px rgba(249,249,249,0.1) solid ;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: transform 0.3s ease;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    &:hover {
        transform: scale(1.07);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border: 3px rgba(249,249,249,0.3) solid ;
    }
    `;