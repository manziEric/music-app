/* eslint-disable consistent-return */
import { useContext, useState } from 'react';
import SEND_ERROR from 'context/constants';
import { GlobalContext } from 'context/Provider';

type HandleButtonClick = () => void;
interface ArrayType {
  value: boolean;
}

let array: ArrayType[] = [];

function useClickHandeler() {
  const [checked, setChecked] = useState<boolean>(false);
  const { dispatch } = useContext(GlobalContext);

  const handleButtonClick: HandleButtonClick = () => {
    setChecked((prevState) => !prevState);
    array.push({ value: checked });
    if (checked === false) {
      return dispatch({
        type: SEND_ERROR,
        payload: { errorMessage: false },
      });
    }
    const count = array.filter((s: ArrayType) => s.value).length;
    if (count === 1 && array.length === 2) {
      if (checked === true) {
        array = [];
        return dispatch({
          type: SEND_ERROR,
          payload: { errorMessage: true },
        });
      }
    }
    if (count === 2 && array.length === 4) {
      if (checked === true) {
        array = [];
        return dispatch({
          type: SEND_ERROR,
          payload: { errorMessage: true },
        });
      }
    }
    if (count === 3 && array.length === 6) {
      if (checked === true) {
        array = [];
        return dispatch({
          type: SEND_ERROR,
          payload: { errorMessage: true },
        });
      }
    }
  };

  const handleKeyPress: HandleButtonClick = () => {
    handleButtonClick();
  };

  return [handleButtonClick, handleKeyPress];
}

export default useClickHandeler;
