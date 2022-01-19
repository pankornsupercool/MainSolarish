import { Container } from "./Components/Container.js";
import {Global} from "./Components/Global.js";
import styled from "styled-components";
import {Navbar, NavbarLogo, NavbarA, NavBarContainer, NavBarUl, NavBarLi} from "./Components/Navbar.js";
import {MainHeader, MainHead1, MainImage, MainContainer, MainPara, MainButton, MainA, TooltipCard ,TooltipBox, MainUl} from "./Components/Main.js";
import {ContentContainer, ContentBox, ContentI, ContentSection} from "./Components/Content.js";


const TooltipText = styled.div`
  background: rgba(28, 56, 151, 0.9);
  color: #fff;
  width: 200px;
  text-align: center;
  line-height: 44px;
  border-radius: 3px;
  cursor: pointer;
`;






const Title = styled.h1`
  color : palevioletred;
  font-size : 1.2em;
  padding : 0.5em;
  width : 150px;
  height : 30px;
  background-color: white;
  align-self : ${(props) => props.alignSelf};

  flex-grow : ${(props) => props.grow};
  display : flex;
  justify-content : ${(props) => props.justifyContent};
  align-items : center;
  margin : 0.5em;
`
function App() {
  return (
    
    <Navbar>
      <Global/>
      <NavBarContainer>
        <NavbarLogo>SOLARISH</NavbarLogo>
        <NavBarUl>
          <NavbarA>SWAP</NavbarA>
          <NavbarA>CONNECT WALLET</NavbarA>
          <NavbarA>ABOUT</NavbarA>
        </NavBarUl>
      </NavBarContainer>

      <MainHeader>
        <MainContainer>
          <div>
            <MainHead1>SOLARISH <br/>DECENTRALIZED FINANCIAL</MainHead1>
            <MainPara>Blockchain smart contract learning  project called  "SOLARISH",<br/> 
            we aiming on the future even though we lost much today 😭<br/>
            and we still trust that cryptocurrency is our oppotunity<br/> 
            To the moon : MOTHER FUCKER 🌕
            </MainPara>
            <TooltipCard>
            <MainButton>
               Discover
               </MainButton>
            <TooltipBox>
              <p>In Development 🌻</p>
            </TooltipBox>
            </TooltipCard>
            <MainUl>
          <MainA>Twitter</MainA>
          <MainA>Meta</MainA>
          <MainA>Instagram</MainA>


          
        </MainUl>
          </div>
          <MainImage src="https://cryptologos.cc/logos/polygon-matic-logo.png" alt="" width="500"/>

        </MainContainer>
      </MainHeader>

      <ContentSection>
        <ContentContainer>
          <ContentBox>
          <h2><ContentI class="fas fa-arrows-alt-v"></ContentI> Jorney & Roadmap</h2>
          <p>
            Roadmap, Reserch and Development update <br/>
            Still in progress.
          </p>
          </ContentBox>
          <ContentBox>
          <h2><ContentI class="fas fa-arrows-alt-v"></ContentI> Community</h2>
          <p>
            We focus on building a strong solarish community <br/>
            Join discord here.
          </p>
          </ContentBox>
          <ContentBox>
          <h2><ContentI class="fas fa-arrows-alt-v"></ContentI> Developers </h2>
          <p>
            Pankorn Wangsakun <br/>
            Teerapop NoobAsShit
          </p>
          </ContentBox>
        </ContentContainer>
        </ContentSection>
    </Navbar>
  );
}

export default App;
