import React from "react";
import styled from "styled-components";
import axios from "axios";

import { colors } from "../utils/colors";
import { Input } from "../components/Input";

/**
 * Style-Components
 */

const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const DivCenter = styled.div`
  max-width: 531px;
  width: 100%;
  height: 500px;
`;

const Block = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px auto;
`;

const ShowRhyme = styled.ul`
  padding: 0;
  border: 1px solid
    ${(props) => (props.noData ? colors.lightblue : "transparent")};
  width: 471px !important;
  margin-top: -20px;
  list-style-type: none;
  box-sizing: border-box;
`;

const ListItem = styled.div`
  border-bottom: 1px solid ${colors.lightblue};
  width: inherit;
  padding: 12px 15px;
  box-sizing: border-box;

  &:last-child {
    border-bottom: 0px solid transparent;
  }
`;

export default function RhymeSearch() {
  const [data, setData] = React.useState([]);
  const inputRef = React.useRef("");

  const onChangeHandler = async () => {
    const value = inputRef.current.value;
    const { data } = await axios(
      "https://api.datamuse.com/words?rel_rhy=" + value
    );
    setData(data.slice(0, 10));
  };

  return (
    <DivContainer>
      <DivCenter>
        <Block>
          <Input
            label="Search Ryhme.."
            type="text"
            size="full"
            color={colors.lightblue}
            onChange={onChangeHandler}
            ref={inputRef}
          />

          <ShowRhyme noData={data?.length}>
            {data?.map((rhyme) => (
              <ListItem key={rhyme.word}>{rhyme.word}</ListItem>
            ))}
          </ShowRhyme>
        </Block>
      </DivCenter>
    </DivContainer>
  );
}
