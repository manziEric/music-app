/* eslint-disable consistent-return */
import { useContext, useState } from 'react';
import SEND_ERROR from 'context/constants';
import { GlobalContext } from 'context/Provider';

type HandleButtonClick = (e: any) => void;

let array: any = [];
function useClickHandeler() {
  const [map] = useState<[] | any>(new Array(3).fill(false));
  const [checked, setChecked] = useState<boolean>(false);

  const { dispatch } = useContext(GlobalContext);

  const handleButtonClick: HandleButtonClick = () => {
    setChecked((prevState) => !prevState);
    array.push({ value: checked });
    if (checked === false) {
      return dispatch({
        type: SEND_ERROR,
        payload: { error: false },
      });
    }
    const count = array.filter((s: any) => s.value).length;
    if (count === 1 && array.length === 2) {
      if (checked === true) {
        array = [];
        return dispatch({
          type: SEND_ERROR,
          payload: { error: true },
        });
      }
    }
    if (count === 2 && array.length === 4) {
      if (checked === true) {
        array = [];
        return dispatch({
          type: SEND_ERROR,
          payload: { error: true },
        });
      }
    }
    if (count === 3 && array.length === 6) {
      if (checked === true) {
        array = [];
        return dispatch({
          type: SEND_ERROR,
          payload: { error: true },
        });
      }
    }
  };

  const handleKeyPress: HandleButtonClick = (e) => {
    handleButtonClick(e);
  };

  return [handleButtonClick, handleKeyPress, map];
}

export default useClickHandeler;
