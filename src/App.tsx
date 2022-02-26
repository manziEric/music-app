import ButtonContainer from 'components/Input/ButtonContainer';
import Input from 'components/Input/Input';
import InputHandler from 'components/Input/InputHandler';
import Logo from 'components/Input/Logo';
import Sidebar from 'components/Sidebar/Sidebar';
import Text from 'components/Text/Text';
import iconsArray from 'utils/icons';

// TODO:[] Use the colors from figma

function App() {
  return (
    <div className="grid grid-cols-4 gap-4 ml-20 mr-20 ">
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
