import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Câu 1" {...a11yProps(0)} />
          <Tab label="Câu 2" {...a11yProps(1)} />
          <Tab label="Câu 3" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Câu 1: Khi truy cập 1 trang web (VD: https://geekadventure.vn) trình duyệt sẽ làm gì? 
        Khi truy cập trang web, trình duyệt sẽ gọi tới máy chủ DNS để biên dịch URL trang web thành một địa chỉ IP, mỗi trang web có địa chỉ IP riêng biệt. Khi tìm thấy địa chỉ IP của trang web chúng ta đang vào, địa chỉ IP đó sẽ được trả về cho trình duyệt.
      </TabPanel>
      <TabPanel value={value} index={1}>
        Câu 2: Nếu có 2 CSS selectors cùng ứng với 1 element thì style của element sẽ thể hiện như thế nào?
        - Các phần tử chứa cả 2 class sẽ được style 
        - các phần tử chứa 0 hoặc 1 class sẽ không được style
      </TabPanel>
      <TabPanel value={value} index={2}>
        Câu 3: Callback & Promise trong Javascript  dùng để làm gì?  
        - Callback là một hàm và là đối số của một hàm khác
        -Một chuỗi các callback được lồng vào nhau liên tiếp, dẫn đến việc khó theo dõi và debug code. 
        Khái niệm Promise ra đời để giải quyết vấn đề này, nó giúp việc xử lý bất đồng độ trở nên dễ dàng, dễ code và dễ debug hơn khi chỉ sử dụng callback

      </TabPanel>
    </Box>
  );
}
