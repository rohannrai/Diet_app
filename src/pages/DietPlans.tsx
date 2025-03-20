import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Fade,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
} from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

interface DietPlan {
  title: string;
  description: string;
  calories: number;
  meals: {
    name: string;
    items: string[];
  }[];
  image: string;
  benefits: string[];
  tips: string[];
  macronutrients: {
    protein: string;
    carbs: string;
    fat: string;
  };
}

const weightRanges = Array.from({ length: 7 }, (_, i) => `${40 + i * 10}-${50 + i * 10}`);

const dietPlans: DietPlan[] = [
  {
    title: 'Weight Loss Plan',
    description: 'A balanced plan designed for healthy and sustainable weight loss.',
    calories: 1500,
    meals: [
      {
        name: 'Breakfast',
        items: ['Oatmeal with fruits', 'Greek yogurt', 'Green tea'],
      },
      {
        name: 'Lunch',
        items: ['Grilled chicken salad', 'Quinoa', 'Steamed vegetables'],
      },
      {
        name: 'Dinner',
        items: ['Baked fish', 'Brown rice', 'Mixed vegetables'],
      },
      {
        name: 'Snacks',
        items: ['Fresh fruits', 'Vegetable sticks', 'Greek yogurt'],
      },
    ],
    image: 'https://picsum.photos/800/600?random=7',
    benefits: [
      'Balanced nutrition',
      'Steady weight loss',
      'Increased energy',
      'Better sleep quality',
      'Improved metabolism',
    ],
    tips: [
      'Stay hydrated with 8 glasses of water daily',
      'Practice portion control',
      'Include protein in every meal',
      'Limit processed foods and sugars',
      'Exercise regularly',
    ],
    macronutrients: {
      protein: '30%',
      carbs: '40%',
      fat: '30%',
    },
  },
  {
    title: 'Weight Gain Plan',
    description: 'High-protein plan for healthy weight gain and muscle building.',
    calories: 2500,
    meals: [
      {
        name: 'Breakfast',
        items: ['Protein smoothie', 'Whole grain toast', 'Eggs'],
      },
      {
        name: 'Lunch',
        items: ['Chicken breast', 'Sweet potato', 'Avocado salad'],
      },
      {
        name: 'Dinner',
        items: ['Lean beef', 'Pasta', 'Roasted vegetables'],
      },
      {
        name: 'Snacks',
        items: ['Nuts and seeds', 'Protein bars', 'Smoothies'],
      },
    ],
    image: 'https://picsum.photos/800/600?random=8',
    benefits: [
      'Muscle growth',
      'Balanced macros',
      'Increased strength',
      'Better recovery',
      'Improved performance',
    ],
    tips: [
      'Increase caloric intake gradually',
      'Focus on nutrient-dense foods',
      'Eat frequent, smaller meals',
      'Track your calorie intake',
      'Combine with strength training',
    ],
    macronutrients: {
      protein: '35%',
      carbs: '45%',
      fat: '20%',
    },
  },
  {
    title: 'Maintenance Plan',
    description: 'Balanced nutrition to maintain your ideal weight.',
    calories: 2000,
    meals: [
      {
        name: 'Breakfast',
        items: ['Muesli', 'Fresh fruits', 'Nuts'],
      },
      {
        name: 'Lunch',
        items: ['Turkey sandwich', 'Mixed salad', 'Fruit juice'],
      },
      {
        name: 'Dinner',
        items: ['Grilled fish', 'Quinoa', 'Steamed vegetables'],
      },
      {
        name: 'Snacks',
        items: ['Fresh fruits', 'Mixed nuts', 'Greek yogurt'],
      },
    ],
    image: 'https://picsum.photos/800/600?random=9',
    benefits: [
      'Weight maintenance',
      'Flexible meals',
      'Sustainable habits',
      'Balanced nutrition',
      'Long-term health',
    ],
    tips: [
      'Maintain consistent meal timing',
      'Balance macronutrients',
      'Include variety in your diet',
      'Monitor portion sizes',
      'Stay active regularly',
    ],
    macronutrients: {
      protein: '30%',
      carbs: '45%',
      fat: '25%',
    },
  },
];

const DietPlans: React.FC = () => {
  const navigate = useNavigate();
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState<'lose' | 'gain'>('lose');
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});
  const [selectedPlan, setSelectedPlan] = useState<DietPlan | null>(null);

  const handleImageError = (imageKey: string) => {
    setImageErrors(prev => ({
      ...prev,
      [imageKey]: true
    }));
  };

  const handlePlanSelect = () => {
    if (weight) {
      navigate('/personalized-plan', { state: { weight, goal } });
    }
  };

  const handlePlanClick = (plan: DietPlan) => {
    setSelectedPlan(plan);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f7fa', py: 4 }}>
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#2c3e50' }}>
              Choose Your Diet Plan
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              Select your weight range and goal to get a personalized plan
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Weight Range (kg)</InputLabel>
              <Select
                value={weight}
                label="Weight Range (kg)"
                onChange={(e) => setWeight(e.target.value)}
              >
                {weightRanges.map((range) => (
                  <MenuItem key={range} value={range}>
                    {range} kg
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Goal</InputLabel>
              <Select
                value={goal}
                label="Goal"
                onChange={(e) => setGoal(e.target.value as 'lose' | 'gain')}
              >
                <MenuItem value="lose">Weight Loss</MenuItem>
                <MenuItem value="gain">Weight Gain</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          {dietPlans.map((plan, index) => (
            <Grid item xs={12} md={4} key={plan.title}>
              <Grow in timeout={1000} style={{ transformOrigin: '0 0 0' }}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                    },
                  }}
                  onClick={() => handlePlanClick(plan)}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={imageErrors[`plan-${index}`] ? 'https://via.placeholder.com/800x600?text=Diet+Plan' : plan.image}
                    alt={plan.title}
                    sx={{ objectFit: 'cover' }}
                    onError={() => handleImageError(`plan-${index}`)}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {plan.title}
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                      {plan.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label={`${plan.calories} calories/day`}
                        color="primary"
                        sx={{ mr: 1 }}
                      />
                      <Chip
                        label={`Protein: ${plan.macronutrients.protein}`}
                        variant="outlined"
                        sx={{ mr: 1 }}
                      />
                      <Chip
                        label={`Carbs: ${plan.macronutrients.carbs}`}
                        variant="outlined"
                        sx={{ mr: 1 }}
                      />
                      <Chip
                        label={`Fat: ${plan.macronutrients.fat}`}
                        variant="outlined"
                      />
                    </Box>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {plan.benefits.map((benefit) => (
                        <Typography
                          key={benefit}
                          component="li"
                          sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}
                        >
                          <FitnessCenterIcon color="primary" fontSize="small" />
                          {benefit}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handlePlanSelect}
            disabled={!weight}
          >
            Get Your Personalized Plan
          </Button>
        </Box>
      </Container>

      {/* Plan Details Dialog */}
      <Dialog
        open={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
        maxWidth="md"
        fullWidth
      >
        {selectedPlan && (
          <>
            <DialogTitle>{selectedPlan.title}</DialogTitle>
            <DialogContent>
              <Typography variant="h6" color="primary" gutterBottom>
                {selectedPlan.calories} calories per day
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Macronutrient Distribution:
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Chip
                    label={`Protein: ${selectedPlan.macronutrients.protein}`}
                    color="primary"
                  />
                  <Chip
                    label={`Carbs: ${selectedPlan.macronutrients.carbs}`}
                    color="secondary"
                  />
                  <Chip
                    label={`Fat: ${selectedPlan.macronutrients.fat}`}
                    color="info"
                  />
                </Box>
              </Box>
              <Typography variant="subtitle1" gutterBottom>
                Daily Meals:
              </Typography>
              <List>
                {selectedPlan.meals.map((meal) => (
                  <React.Fragment key={meal.name}>
                    <ListItem>
                      <ListItemText
                        primary={meal.name}
                        secondary={meal.items.join(', ')}
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
              <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                Benefits:
              </Typography>
              <List>
                {selectedPlan.benefits.map((benefit) => (
                  <ListItem key={benefit}>
                    <ListItemText primary={benefit} />
                  </ListItem>
                ))}
              </List>
              <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                Tips for Success:
              </Typography>
              <List>
                {selectedPlan.tips.map((tip) => (
                  <ListItem key={tip}>
                    <ListItemText primary={tip} />
                  </ListItem>
                ))}
              </List>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelectedPlan(null)}>Close</Button>
              <Button
                variant="contained"
                onClick={() => {
                  setSelectedPlan(null);
                  navigate('/personalized-plan', { state: { weight, goal } });
                }}
                disabled={!weight}
              >
                Get Started
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default DietPlans; 