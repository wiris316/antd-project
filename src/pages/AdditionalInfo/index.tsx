import Dashboard from '@/components/Dashboard';
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';
import StoreProvider from '@/utils/Store';
import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';


const AdditionalInfo: React.FC = () => {
  return (
    <>
      <h2>Additional Information</h2>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    </>
  );
};

export default AdditionalInfo;