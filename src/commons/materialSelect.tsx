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
  margin-left: 1%;
`;

const options: IOptions[] = [
  { label: "알류미늄", value: "알류미늄" },
  { label: "탄소강", value: "탄소강" },
  { label: "구리", value: "구리" },
  { label: "합금강", value: "합금강" },
  { label: "강철", value: "강철" },
];

const MaterialSelect = ({ materialSelected, setMaterialSelected }) => {
  return (
    <SelectButton>
      <MultiSelect
        options={options}
        value={materialSelected}
        onChange={setMaterialSelected}
        labelledBy="Select"
        hasSelectAll={false}
        disableSearch={true}
        overrideStrings={{
          allItemsAreSelected: "재료(5)",
          clearSearch: "검색 내용을 삭제합니다.",
          noOptions: "선택된 옵션이 없습니다.",
          search: "재료",
          selectAll: "재료",
          selectAllFiltered: "재료",
          selectSomeItems: "재료",
        }}
      />
    </SelectButton>
  );
};

export default MaterialSelect;
