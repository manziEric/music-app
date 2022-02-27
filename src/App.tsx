import ButtonContainer from 'components/Input/ButtonContainer';
import Input from 'components/Input/Input';
import InputHandler from 'components/Input/InputHandler';
import Logo from 'components/Input/Logo';
import Sidebar from 'components/Sidebar/Sidebar';
import Text from 'components/Text/Text';
import iconsArray from 'utils/icons';

// TODO:[] Look If all TODO'S are done in the TODO.md

function App() {
  return (
    <div className="flex flex-row items-center justify-center h-screen  mx-20">
      <Sidebar />
      <InputHandler>
        <Text />
        {iconsArray.map(({ id, icon, text }) => (
          <ButtonContainer key={id}>
            <Logo logo={icon} altText="music logo" />
            <h6>{text}</h6>
            <Input name="button" />
          </ButtonContainer>
        ))}
      </InputHandler>
    </div>
  );
}

export default App;
