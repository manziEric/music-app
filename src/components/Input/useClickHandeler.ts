type HandleButtonClick = (e: any) => void;

function useClickHandeler() {
  const handleButtonClick: HandleButtonClick = (e) => {
    console.log(e.target.checked);
    // const isChecked = e.target.checked;

    // if (!isChecked || isChecked === undefined) {
    //   console.log('nothing is clicked');
    // }
  };

  const handleKeyPress: HandleButtonClick = () => {
    // console.log(e);
  };

  return [handleButtonClick, handleKeyPress];
}

export default useClickHandeler;
