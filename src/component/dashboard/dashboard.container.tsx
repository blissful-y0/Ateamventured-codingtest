import React, { useCallback, useEffect, useState } from "react";
import DashBoardUI from "./dashboard.presenter";
import { IData, IMaterialSeleted, IState } from "./dashboard.types";
import _ from "lodash";

const DashBoard: React.FunctionComponent = () => {
  const API_URL: string = "http://localhost:3000/requests";

  const [data, setData] = useState<IData[]>([]);
  const [filteredData, setFilteredData] = useState<IData[]>([]);

  const [methodSelected, setMethodSelected] = useState<IMaterialSeleted[] | []>(
    []
  );
  const [materialSelected, setMaterialSelected] = useState<
    IMaterialSeleted[] | []
  >([]);

  const [state, setState] = useState<IState>({
    checked: false,
  });

  useEffect(() => {
    fetch(API_URL)
      .then((result) => result.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    onChangeSearchOption();
  }, [methodSelected, materialSelected, state]);

  const onChangeSearchOption = () => {
    let option: string[] = methodSelected.map((el, index) => el.value);
    let temp: IData[] = [...data];

    if (state.checked) {
      setFilteredData(temp.filter((el) => el.status === "상담중"));
    } else {
      setFilteredData(data);
    }

    if (methodSelected !== []) {
      if (option.length > 1) {
        let filter = _.filter(temp, function (item) {
          return item.method.includes("선반");
        });
        let result = _.filter(filter, function (item) {
          return item.method.includes("밀링");
        });
        setFilteredData(result);
      }
    }

    if (option.length === 1) {
      let result = _.filter(temp, function (item) {
        return item.method.includes(option[0]);
      });
      setFilteredData(result);
    }
  };

  return (
    <DashBoardUI
      data={data}
      materialSelected={materialSelected}
      setMaterialSelected={setMaterialSelected}
      methodSelected={methodSelected}
      setMethodSelected={setMethodSelected}
      setState={setState}
      state={state}
      filteredData={filteredData}
    />
  );
};

export default DashBoard;
