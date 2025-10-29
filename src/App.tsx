import React from 'react';
import { ButtonSize, ButtonType, SyButton } from './components/Buttons/button';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello World</h1>
                <h2>测试</h2>
                <SyButton size={ButtonSize.Large}>大按钮</SyButton>
                <SyButton>默认按钮</SyButton>
                <SyButton size={ButtonSize.Small}>小按钮</SyButton>
                <SyButton btnType={ButtonType.Flat}>默认按钮</SyButton>
                <SyButton btnType={ButtonType.Filled} color="primary">
                    测试
                </SyButton>
                <SyButton btnType={ButtonType.Filled} color="info">
                    测试
                </SyButton>
                <SyButton btnType={ButtonType.Filled} color="danger">
                    测试
                </SyButton>
                <SyButton btnType={ButtonType.Filled} color="warning">
                    测试
                </SyButton>
                <SyButton btnType={ButtonType.Filled} color="#860462" disabled>
                    测试
                </SyButton>
                <SyButton btnType={ButtonType.Filled} color="success" textColor="red">
                    测试
                </SyButton>
                <SyButton btnType={ButtonType.Link} textColor="white" disabled href="https://www.baidu.com">
                    链接按钮
                </SyButton>
                <SyButton btnType={ButtonType.Link} disabled textColor="white" href="https://www.baidu.com">
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
