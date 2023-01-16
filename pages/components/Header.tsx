import React, { useContext } from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import { AccountMenu } from './AccountMenu';
import { styled } from '@mui/system';
import { UserContext } from '../providers/user-provider';
import Link from 'next/link';

const Wrapper = styled('div')({
  flexGrow: 1
})
const TitleLink = styled(Link)({
  textDecoration: 'none',
  flexGrow: 1,
})


const Header: React.FC = () => {
  const { user } = useContext(UserContext);

  return (
    <Wrapper>
      <AppBar sx={{backgroundColor: '#FFF'}}>
        <Toolbar sx={{minHeight: '80px !important'}}>
          <Box flexGrow={1}>
            <TitleLink href={'/events'}>
              <Typography
                sx={{fontSize: 24}}
                fontWeight="800"
                color="primary"
                >Biome</Typography>
            </TitleLink>
          </Box>
          <Box>
            <AccountMenu user={user} />
          </Box>
        </Toolbar>
      </AppBar>
    </Wrapper>
  );
}

export default Header;