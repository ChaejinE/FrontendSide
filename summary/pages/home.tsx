import styled from "styled-components";
import Summary from "../components/summary";
import Title from "../components/title";

const Wrapper = styled.div``;
function Home() {
    return (
        <Wrapper>
            <Title/>
            <Summary/>
        </Wrapper>
    )
}

export default Home;
