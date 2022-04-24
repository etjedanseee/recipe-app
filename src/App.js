import Layout from 'antd/lib/layout/layout';
import { Provider } from 'react-redux';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import store from './redux/store'
import './styles/scss/index.scss'

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Sidebar />
        <MainContent />
      </Layout>
    </Provider>
  );
}

export default App;
