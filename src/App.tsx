import ErrorMessage from 'components/errorMessage/ErrorMessage';
import ButtonContainer from 'components/input/ButtonContainer';
import Input from 'components/input/Input';
import InputHandler from 'components/input/InputHandler';
import Logo from 'components/input/Logo';
import Sidebar from 'components/sidebar/Sidebar';
import Text from 'components/text/Text';
import { GlobalContext } from 'context/Provider';
import { useContext } from 'react';
import iconsArray from 'utils/icons';
import errorIcon from 'assets/Icon.svg';

// TODO:[] Look If all TODO'S are done in the TODO.md

function App() {
  const context = useContext(GlobalContext);
  const error = context.InputState?.errorMessage;
  return (
    <div
      className="grid h-screen place-items-center bg-gray-100"
      data-testid="app"
    >
      <div className="md:grid md:grid-cols-4 md:gap-4 mx-10">
        <Sidebar />
        <InputHandler>
          <Text
            title="Formats"
            text=" Select all the formats this product and tracklisting will be released
        on."
          />
          <div className="grid grid-cols-3 col-span-3 items-center ">
            {iconsArray.map(({ id, icon, text }) => (
              <ButtonContainer key={id} id={id}>
                <Logo logo={icon} altText="music logo" />
                <h6>{text}</h6>
                <Input id={id} name={`button${id}`} />
              </ButtonContainer>
            ))}
            {error ? (
              <ErrorMessage>
                <Logo logo={errorIcon} altText="error logo" />
                <p className="text-red-500 ml-4">
                  This is an error message that appears when there are 0 formats
                  selected
                </p>
              </ErrorMessage>
            ) : null}
          </div>
        </InputHandler>
      </div>
    </div>
  );
}

export default App;
