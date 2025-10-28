import React from 'react';
import { ButtonType, SyButton } from './components/Buttons/button';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello World</h1>
                <h2>测试</h2>
                <SyButton>默认按钮</SyButton>
                <SyButton btnType={ButtonType.Link} color="primary" textColor="white" href="https://www.baidu.com">
                    链接按钮
                </SyButton>
                <h3>123</h3>
                <h4>2</h4>
                <code>const a = '1';</code>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
