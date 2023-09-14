import Dashboard from '@/components/Dashboard';
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';
import StoreProvider from '@/utils/Store';
import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';


const HomePage: React.FC = () => {
  return (
    // Changed default language to English
    <ConfigProvider
      locale={enUS}
      theme={{
        components: {
          Button: {
            colorPrimary: '#00b96b',

          },
          Input: {
            colorPrimary: '#eb2f96',

          }
        },
    }}>
      <StoreProvider>
        <PageContainer ghost>
          <div className={styles.container}>
            <Dashboard/>
          </div>
        </PageContainer>
      </StoreProvider>
    </ConfigProvider>
  );
};

export default HomePage;
