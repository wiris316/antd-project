import Dashboard from '@/components/Dashboard';
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';
import StoreProvider from '@/utils/Store';
import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';


const HomePage: React.FC = () => {
  return (
    // Changed default language to English
    <ConfigProvider locale={enUS}>
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
