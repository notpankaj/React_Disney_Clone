import styled from "styled-components"

export default function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg"/>
                <NavMenu>
                    <a href="#">
                        <img src="/images/home-icon.svg" alt="" />
                        <span>HOME</span>
                    </a>
                    <a href="#">
                        <img src="/images/search-icon.svg" alt="" />
                        <span>SEARCH</span>
                    </a>
                    <a href="#">
                        <img src="/images/watchlist-icon.svg" alt="" />
                        <span>WATCHLIST</span>
                    </a>
                    <a href="#">
                        <img src="/images/original-icon.svg" alt="" />
                        <span>ORIGINALS</span>
                    </a>
                    <a href="#">
                        <img src="/images/movie-icon.svg" alt="" />
                        <span>MOVIES</span>
                    </a>
                    <a href="#">
                        <img src="/images/series-icon.svg" alt="" />
                        <span>series</span>
                    </a>
                </NavMenu>

                <UserImg src="https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo" />
        </Nav>
    )
}




const Nav = styled.div`
    height: 70px;
    background: #090b13;
    display : flex;
    align-items: center;
    padding : 0 36px;
    overflow-x: hidden;
`;

const Logo = styled.img`
    width: 80px;
`;

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 20px;
    align-items: center;

    a {
        display: flex;
        color: #fff;
        text-decoration: none;
        align-items: center;
        text-transform: uppercase;
        padding: 0 12px;
    
        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &::after {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                background: #fff;
                height: 2px;
                transform-origin: left center ;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                opacity: 0;
                transform: scaleX(0);
            }
        }

        &:hover{
            span::after{
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }
`;

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`;