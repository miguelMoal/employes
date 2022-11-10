//Externals
import { MutatingDots } from "react-loader-spinner";
import styled from "styled-components";

const LoaderContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <MutatingDots
        height="100"
        width="100"
        color="#4a88da"
        secondaryColor="#4a88da"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderContainer>
  );
};

export default Loader;
