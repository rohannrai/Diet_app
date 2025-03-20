import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Fade,
  Grow,
  CardMedia,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface DietPlanDetails {
  title: string;
  description: string;
  calories: number;
  meals: {
    name: string;
    items: string[];
  }[];
  tips: string[];
  image: string;
}

const PersonalizedDietPlan: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { weight, goal } = location.state as { weight: string; goal: 'lose' | 'gain' };
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const dietPlan: DietPlanDetails = {
    title: `${goal === 'lose' ? 'Weight Loss' : 'Weight Gain'} Plan for ${weight}kg`,
    description: `A personalized diet plan designed for ${goal === 'lose' ? 'healthy weight loss' : 'healthy weight gain'} based on your weight range.`,
    calories: goal === 'lose' ? 1500 : 2500,
    meals: [
      {
        name: 'Breakfast',
        items: [
          goal === 'lose' ? 'Oatmeal with fruits' : 'Protein smoothie',
          goal === 'lose' ? 'Greek yogurt' : 'Whole grain toast',
          goal === 'lose' ? 'Green tea' : 'Eggs',
        ],
      },
      {
        name: 'Lunch',
        items: [
          goal === 'lose' ? 'Grilled chicken salad' : 'Chicken breast',
          goal === 'lose' ? 'Quinoa' : 'Sweet potato',
          goal === 'lose' ? 'Steamed vegetables' : 'Avocado salad',
        ],
      },
      {
        name: 'Dinner',
        items: [
          goal === 'lose' ? 'Baked fish' : 'Lean beef',
          goal === 'lose' ? 'Brown rice' : 'Pasta',
          goal === 'lose' ? 'Mixed vegetables' : 'Roasted vegetables',
        ],
      },
      {
        name: 'Snacks',
        items: [
          goal === 'lose' ? 'Fresh fruits' : 'Nuts and seeds',
          goal === 'lose' ? 'Vegetable sticks' : 'Protein bars',
          goal === 'lose' ? 'Greek yogurt' : 'Smoothies',
        ],
      },
    ],
    tips: [
      goal === 'lose' ? 'Stay hydrated by drinking 8 glasses of water daily' : 'Increase caloric intake gradually',
      goal === 'lose' ? 'Practice portion control' : 'Focus on nutrient-dense foods',
      goal === 'lose' ? 'Include protein in every meal' : 'Eat frequent, smaller meals',
      goal === 'lose' ? 'Limit processed foods and sugars' : 'Track your calorie intake',
      goal === 'lose' ? 'Exercise regularly' : 'Combine with strength training',
    ],
    image: goal === 'lose' 
      ? 'https://picsum.photos/800/600?random=10'
      : 'https://picsum.photos/800/600?random=11',
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f7fa', py: 4 }}>
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box sx={{ mb: 4 }}>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate('/diet-plans')}
              sx={{ mb: 2 }}
            >
              Back to Diet Plans
            </Button>
            <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#2c3e50' }}>
              {dietPlan.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              {dietPlan.description}
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Grow in timeout={1000} style={{ transformOrigin: '0 0 0' }}>
              <Card sx={{ mb: 4 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={imageError ? 'https://via.placeholder.com/800x600?text=Diet+Plan' : dietPlan.image}
                  alt={dietPlan.title}
                  onError={handleImageError}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Daily Meal Plan
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {dietPlan.calories} calories per day
                  </Typography>
                  {dietPlan.meals.map((meal) => (
                    <Box key={meal.name} sx={{ mb: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        {meal.name}
                      </Typography>
                      <List>
                        {meal.items.map((item) => (
                          <ListItem key={item}>
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grow>
          </Grid>

          <Grid item xs={12} md={4}>
            <Grow in timeout={1000} style={{ transformOrigin: '0 0 0' }}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Tips for Success
                  </Typography>
                  <List>
                    {dietPlan.tips.map((tip, index) => (
                      <React.Fragment key={tip}>
                        <ListItem>
                          <ListItemText primary={tip} />
                        </ListItem>
                        {index < dietPlan.tips.length - 1 && <Divider />}
                      </React.Fragment>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PersonalizedDietPlan; 