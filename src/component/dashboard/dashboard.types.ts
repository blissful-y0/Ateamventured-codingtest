import React, { SetStateAction } from "react";

export interface IData {
  amount: number;
  client: string;
  count: number;
  due: string;
  id: number;
  material: string[];
  method: string[];
  status: string;
  title: string;
}

export type IMethodSelected = {
  label: string;
  value: string;
};

export type IMaterialSeleted = {
  label: string;
  value: string;
};

export type IState = {
  checked: boolean;
};
