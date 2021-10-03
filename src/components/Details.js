import styled from "styled-components";

function Details() {
    return (
        <Container>
            <Background>
                <img src="https://sothebys-com.brightspotcdn.com/dims4/default/889fec7/2147483647/strip/true/crop/2000x1572+0+0/resize/1018x800!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F6b%2F00%2F2942e4ad490d9e2e0f86609fa11f%2Fl19985-b9ybn-01.jpg"  />
            </Background>

            <ImageTitle>
                <img src="https://4.bp.blogspot.com/-2HJrDTussYI/XL2PAqt_2oI/AAAAAAABoNE/XXyfaN8AVPwEFu7bUWBNiRp_41Mod0YVwCLcBGAs/s400/aladdin__2019__logo_png__by_mintmovi3_dcp5c28-fullview.png" />
            </ImageTitle>

            <Controls>
                
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </PlayButton>
                    
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>TRAILER</span>
                </TrailerButton>
                
                <AddButton>
                    <span>+</span>
                </AddButton>
                
                
                <GroupWatch>
                    <img src="/images/group-icon.png" alt="" />
                </GroupWatch>

            </Controls>

            <SubTitle>
                2018 • 7m • Family, Fantasy, Kids, Animation
            </SubTitle>

            <Description>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A cumque eum excepturi dicta commodi. Aspernatur, deserunt? Molestias deleniti quisquam temporibus.
            </Description>


        </Container>
    )
}

export default Details


const Container = styled.div`
    height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`;

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    margin-top: 40px;
    min-height: 170px;
    min-width: 200px;
    max-height: 200px;
    max-width: 210px;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
`;
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    
    &:hover {
        background: rgb(198, 198, 198);
    }
    `;
const TrailerButton = styled(PlayButton)`
    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(249, 249, 249);
    color: #fff;

`;
const AddButton = styled.button`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    border: 2px solid #fff;
    background : rgba(0,0,0, 0.6) ; 
    cursor:  pointer;
    margin-right: 15px;
    span {
        font-size: 30px;
        color: #FFF;
    }
    `;
const GroupWatch = styled(AddButton)`
    background : rgb(0,0,0) ; 
`;

const SubTitle = styled.div`
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 25px;
    margin-top: 26px;
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    max-width: 760px;
`