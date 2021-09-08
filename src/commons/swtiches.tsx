import React, { SetStateAction, useState } from "react";
import Switch from "@material-ui/core/Switch";

interface IState {
  state: boolean;
  setState: (_: SetStateAction<boolean>) => void;
}

function Swtich() {
  const [state, setState] = useState({
    checked: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        size="medium"
        checked={state.checked}
        onChange={handleChange}
        color="primary"
        name="checked"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
}

export default Swtich;
