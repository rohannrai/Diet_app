import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <RestaurantIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'primary.main' }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            Diet Planner
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <RestaurantIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'primary.main' }} />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
                fontWeight: 700,
                color: 'primary.main',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              onClick={() => navigate('/')}
            >
              Diet Planner
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              color="inherit"
              onClick={() => navigate('/')}
              sx={{
                mr: 2,
                color: isActive('/') ? 'primary.main' : 'inherit',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate('/diet-plans')}
              sx={{
                mr: 2,
                color: isActive('/diet-plans') ? 'primary.main' : 'inherit',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Diet Plans
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 