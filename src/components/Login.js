import styled from "styled-components"

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Discription>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore soluta fugit sed consectetur atque similique?
                </Discription>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login


const Container = styled.div`
    min-height: calc(100vh - 70px);
    position: relative;
    display: flex;
    align-items: top;
    justify-content: center;
    
    &::before {
        position: absolute;
        content: '';
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 0.7;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/images/login-background.jpg');
        z-index: -1;

    }
`;   

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    margin-top: 100px;
    width: 70%;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    `;
const CTALogoOne = styled.img`
`;

const SignUp = styled.a`
    width: 100%;
    padding: 17px 0;
    background: #0063e5 ;
    font-weight: bold;
    text-align: center;
    border-radius: 4px;
    color: #f9f9f9;
    cursor: pointer;
    font-size: 18px;
    transition:  all 250ms ease;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }
`;

const Discription = styled.p`
    font-size: 11px;
    line-height: 1.5;
    letter-spacing: 1.5px;
    text-align: center;
`
const CTALogoTwo = styled.img`
    width: 90%;
`;