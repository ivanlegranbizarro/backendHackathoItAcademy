import styled from 'styled-components';

const ContentCardDetails = styled.main`
    position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BlurBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    filter: blur(5px);
    z-index: 1; 
`;

const CardDetailsSection = styled.section`
    border: 2px solid black;
    border-radius: 15px;
    overflow: auto;
    position: relative;
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: white;
    z-index: 2; 
`;

const Header = styled.header`
    width: 50%;
    margin: 10px;
`;

const Title = styled.h2`
color: black;
`

const Aside = styled.aside`
    width: 50%;
    text-align: start;
    display: flex;
    flex-direction: column;
    margin: 10px;
    justify-content: space-evenly;

`;

const Image = styled.img`
    border-radius: 10px;
    margin: 10px;
    max-width: 90%; 
    height: 250px;
    object-fit: cover;
`;

const CardDetails = ({card,setOpenModal}) => {
    return (
        <ContentCardDetails onClick={()=>setOpenModal(false)}>
            <BlurBackground />
            <CardDetailsSection onClick={(e) => e.stopPropagation()}>
                <Header>
                    <Image src={card.imgSrc} alt="foto_barri" /> 
                    <Title>{card.title}</Title>
                </Header>
                <Aside>
                    <div><h2>Tipo:</h2><p>{card.type}</p></div>
                    <div><h2>Dirección:</h2><p>{card.direction}</p></div>
                    <div><h2>Año de apertura:</h2><p>{card.year}</p></div>
                </Aside>
            </CardDetailsSection>       
        </ContentCardDetails>
    );
}

export default CardDetails;
