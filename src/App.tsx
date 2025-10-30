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
                <br />
                <SyButton btnType={ButtonType.Filled} color="primary">
                    primary
                </SyButton>
                <SyButton btnType={ButtonType.Filled} color="info">
                    info
                </SyButton>
                <SyButton btnType={ButtonType.Filled} color="danger">
                    danger
                </SyButton>
                <SyButton btnType={ButtonType.Filled} color="warning">
                    warning
                </SyButton>
                <SyButton btnType={ButtonType.Filled} color="#860462" disabled>
                    #860462
                </SyButton>
                <SyButton btnType={ButtonType.Filled} color="success" textColor="red">
                    success
                </SyButton>
                <br />
                <SyButton btnType={ButtonType.Link} textColor="white" disabled href="https://www.baidu.com">
                    链接按钮
                </SyButton>
                <SyButton btnType={ButtonType.Link} disabled textColor="white" href="https://www.baidu.com">
                    链接按钮
                </SyButton>
                <br />
                border类型
                <SyButton btnType={ButtonType.Border} color="primary">
                    primary
                </SyButton>
                <SyButton btnType={ButtonType.Border} color="info">
                    info
                </SyButton>
                <SyButton btnType={ButtonType.Border} color="danger">
                    danger
                </SyButton>
                <SyButton btnType={ButtonType.Border} color="warning">
                    warning
                </SyButton>
                <SyButton btnType={ButtonType.Border} color="#860462" disabled>
                    #860462
                </SyButton>
                <SyButton btnType={ButtonType.Border} color="success" textColor="red">
                    success
                </SyButton>
                <br />
                <SyButton btnType={ButtonType.Flat} color="primary">
                    primary
                </SyButton>
                <SyButton btnType={ButtonType.Flat} color="info">
                    info
                </SyButton>
                <SyButton btnType={ButtonType.Flat} color="danger">
                    danger
                </SyButton>
                <SyButton btnType={ButtonType.Flat} color="warning">
                    warning
                </SyButton>
                <SyButton btnType={ButtonType.Flat} color="#860462" disabled>
                    #860462
                </SyButton>
                <SyButton btnType={ButtonType.Flat} color="success" textColor="red">
                    success
                </SyButton>
                <br />
                <SyButton btnType={ButtonType.Line} color="primary">
                    primary
                </SyButton>
                <SyButton btnType={ButtonType.Line} color="info">
                    info
                </SyButton>
                <SyButton btnType={ButtonType.Line} color="danger" lineOrigin={'left'}>
                    danger
                </SyButton>
                <SyButton btnType={ButtonType.Line} color="warning" lineOrigin={'right'}>
                    warning
                </SyButton>
                <SyButton btnType={ButtonType.Line} color="#860462" disabled>
                    #860462
                </SyButton>
                <SyButton btnType={ButtonType.Line} linePosition={'top'} color="success" textColor="red">
                    success
                </SyButton>
                <br />
                <SyButton btnType={ButtonType.Gradient} color="primary">
                    primary
                </SyButton>
                <SyButton btnType={ButtonType.Gradient} color="info">
                    info
                </SyButton>
                <SyButton btnType={ButtonType.Gradient} color="danger" lineOrigin={'left'}>
                    danger
                </SyButton>
                <SyButton btnType={ButtonType.Gradient} color="warning" lineOrigin={'right'}>
                    warning
                </SyButton>
                <SyButton btnType={ButtonType.Gradient} color="#860462" disabled>
                    #860462
                </SyButton>
                <SyButton btnType={ButtonType.Gradient} linePosition={'top'} color="success" textColor="red">
                    success
                </SyButton>
                <br />
                <SyButton btnType={ButtonType.Relief} color="primary">
                    primary
                </SyButton>
                <SyButton btnType={ButtonType.Relief} color="info">
                    info
                </SyButton>
                <SyButton btnType={ButtonType.Relief} color="danger" lineOrigin={'left'}>
                    danger
                </SyButton>
                <SyButton btnType={ButtonType.Relief} color="warning" lineOrigin={'right'}>
                    warning
                </SyButton>
                <SyButton btnType={ButtonType.Relief} color="#860462" disabled>
                    #860462
                </SyButton>
                <SyButton btnType={ButtonType.Relief} linePosition={'top'} color="success" textColor="red">
                    success
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
