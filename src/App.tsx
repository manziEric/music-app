import ErrorMessage from 'components/errorMessage/ErrorMessage';
import ButtonContainer from 'components/Input/ButtonContainer';
import Input from 'components/Input/Input';
import InputHandler from 'components/Input/InputHandler';
import Logo from 'components/Input/Logo';
import Sidebar from 'components/Sidebar/Sidebar';
import Text from 'components/Text/Text';
import { GlobalContext } from 'context/Provider';
import { useContext } from 'react';
import iconsArray from 'utils/icons';

// TODO:[] Look If all TODO'S are done in the TODO.md

function App() {
  const {
    InputState: { error },
  } = useContext(GlobalContext);

  return (
    <div className="grid h-screen place-items-center bg-gray-100">
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
            {error ? <ErrorMessage /> : null}
          </div>
        </InputHandler>
      </div>
    </div>
  );
}

export default App;
