// import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import TextInput from './components/TextInput';
import TextList from './components/TextList';
import store from './redux/config/store';

function App() {
  // TODO: texts 를 context api 로 리팩터링 하세요.
  // const [texts, setTexts] = useState(() =>
  //   localStorage.getItem('texts')
  //     ? JSON.parse(localStorage.getItem('texts'))
  //     : []
  // );

  // useEffect(() => {
  //   localStorage.setItem('texts', JSON.stringify(texts));
  // }, [texts]);

  // const onAddText = (text) => {
  //   setTexts((prevTexts) => [...prevTexts, text]);
  // };

  return (
    <Provider store={store}>
      <h1>Text Input and Listing</h1>
      <TextInput />
      <TextList />
    </Provider>
  );
}

export default App;
