'use client';

import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

export const Header = () => {
  const [open, openSet] = React.useState(false);
  const [title, titleSet] = React.useState('');

  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    openSet((prevOpen) => !prevOpen);
  };

  const handleClose = (
    e: Event | React.SyntheticEvent,
    value: string | null
  ) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(e.target as HTMLElement)
    ) {
      return;
    }

    if (value) {
      titleSet(value);
    }

    openSet(false);
  };

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      openSet(false);
    } else if (event.key === 'Escape') {
      openSet(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Stack direction='row' spacing={2}>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='open drawer'
                sx={{ mr: 2 }}
                ref={anchorRef}
                id='composition-button'
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup='true'
                onClick={handleToggle}
              >
                <MenuIcon />
              </IconButton>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement='bottom-start'
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom-start'
                          ? 'left top'
                          : 'left bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener
                        onClickAway={(e) => handleClose(e, null)}
                      >
                        <MenuList
                          autoFocusItem={open}
                          id='composition-menu'
                          aria-labelledby='composition-button'
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={(e) => handleClose(e, 'Profile')}>
                            Profile
                          </MenuItem>
                          <MenuItem
                            onClick={(e) => handleClose(e, 'My account')}
                          >
                            My account
                          </MenuItem>
                          <MenuItem onClick={(e) => handleClose(e, 'Logout')}>
                            Logout
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Stack>
            <div className='flex w-full '>
              <Typography
                variant='h6'
                noWrap
                component='div'
                sx={{
                  flex: 1,
                  flexGrow: 1,
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                {title}
              </Typography>
              <div className='flex-1'>Logo</div>
            </div>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
