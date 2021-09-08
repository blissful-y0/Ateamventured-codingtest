import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import styled from "@emotion/styled";

interface IOptions {
  label: string;
  value: string;
}
const SelectButton = styled.div`
  width: 120px;
  max-width: 120px;
  height: 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #323d45;
`;

const options: IOptions[] = [
  { label: "밀링", value: "밀링" },
  { label: "선반", value: "선반" },
];

const MethodSelect = ({ methodSelected, setMethodSelected }) => {
  return (
    <SelectButton>
      <MultiSelect
        options={options}
        value={methodSelected}
        onChange={setMethodSelected}
        labelledBy="Select"
        hasSelectAll={false}
        disableSearch={true}
        overrideStrings={{
          allItemsAreSelected: "가공(2)",
          clearSearch: "검색 내용을 삭제합니다.",
          noOptions: "선택된 옵션이 없습니다.",
          search: "가공방식",
          selectAll: "가공방식",
          selectAllFiltered: "가공방식",
          selectSomeItems: "가공방식",
        }}
      />
    </SelectButton>
  );
};

export default MethodSelect;
