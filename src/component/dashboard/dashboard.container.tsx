import React, { useEffect, useState } from "react";
import DashBoardUI from "./dashboard.presenter";
import { IData, IMaterialSeleted } from "./dashboard.types";

const DashBoard: React.FunctionComponent = () => {
  const API_URL: string = "http://localhost:3000/requests";
  const [data, setData] = useState<IData[] | []>([]);

  const [methodSelected, setMethodSelected] = useState<IMaterialSeleted[] | []>(
    []
  );
  const [materialSelected, setMaterialSelected] = useState<
    IMaterialSeleted[] | []
  >([]);

  const [online, setOnline] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((result) => result.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <DashBoardUI
      data={data}
      materialSelected={materialSelected}
      setMaterialSelected={setMaterialSelected}
      methodSelected={methodSelected}
      setMethodSelected={setMethodSelected}
    />
  );
};

export default DashBoard;
