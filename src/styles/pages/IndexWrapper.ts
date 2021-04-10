import styled from 'styled-components';

const IndexWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    
    justify-content: center;
    align-items: center;
`;

const max_width = '1480px';

export const IntroduceBox = styled.section`
    max-width: ${max_width};
    min-height: 700px;
    margin: 0 auto;

    display: flex;
    align-items: center;

    .IntroduceBox-Title {
        width: 50%;
        padding: 0 40px;
        h1 {
            margin: 0 0 8px 0;
            font-size: 56px;
        }
        p {
            margin: 24px 0 16px 0;
            font-size: 24px;
        }
    }
    .IntroduceBox-Image {
        width: 50%;
        padding: 0 40px;
    }
`;

export default IndexWrapper;