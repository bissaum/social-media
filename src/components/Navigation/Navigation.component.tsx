import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import NavigationStyles from './Navigation.style';

declare namespace NavigationTypes {
  type Item = {
    key: string
    label: string
    icon: JSX.Element
  }

  type Props = {
    items: Item[]
  }
}

export default function Navigation(props: NavigationTypes.Props) {
  const [value, setValue] = useState(0)

  return (
    <Box sx={NavigationStyles.box}>
      {props?.items && <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          const item = props.items[newValue];
          window.location.href = `/#${item.key}`;
          setValue(newValue);
        }}
      >
        {props.items.map(item => <BottomNavigationAction key={item.key} label={item.label} icon={item.icon} />)}
      </BottomNavigation>}
    </Box>
  )
}