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
  Paper,
  Fade,
  Grow,
  Slide,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

interface DietModel {
  title: string;
  description: string;
  benefits: string[];
  image: string;
  details: {
    calories: number;
    meals: {
      name: string;
      items: string[];
    }[];
    tips: string[];
  };
}

interface FoodTemplate {
  title: string;
  description: string;
  image: string;
  details: {
    calories: number;
    nutrients: string[];
    mealIdeas: string[];
  };
}

const dietModels: DietModel[] = [
  {
    title: 'Weight Loss Plan',
    description: 'Scientifically designed plan for healthy and sustainable weight loss.',
    benefits: ['Balanced nutrition', 'Steady weight loss', 'Increased energy'],
    image: 'https://picsum.photos/800/600?random=1',
    details: {
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
      ],
      tips: [
        'Stay hydrated with 8 glasses of water daily',
        'Practice portion control',
        'Include protein in every meal',
        'Limit processed foods and sugars',
        'Exercise regularly',
      ],
    },
  },
  {
    title: 'Weight Gain Plan',
    description: 'Structured plan for healthy weight gain and muscle building.',
    benefits: ['Protein-rich meals', 'Muscle growth', 'Balanced macros'],
    image: 'https://picsum.photos/800/600?random=2',
    details: {
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
      ],
      tips: [
        'Increase caloric intake gradually',
        'Focus on nutrient-dense foods',
        'Eat frequent, smaller meals',
        'Track your calorie intake',
        'Combine with strength training',
      ],
    },
  },
  {
    title: 'Maintenance Plan',
    description: 'Keep your ideal weight while enjoying delicious, healthy food.',
    benefits: ['Flexible meals', 'Nutrient balance', 'Sustainable habits'],
    image: 'https://picsum.photos/800/600?random=3',
    details: {
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
      ],
      tips: [
        'Maintain consistent meal timing',
        'Balance macronutrients',
        'Include variety in your diet',
        'Monitor portion sizes',
        'Stay active regularly',
      ],
    },
  },
];

const foodTemplates: FoodTemplate[] = [
  {
    title: 'Breakfast Templates',
    description: 'Start your day with energy-packed, nutritious meals.',
    image: 'https://picsum.photos/800/600?random=4',
    details: {
      calories: 400,
      nutrients: ['Protein: 20g', 'Carbs: 45g', 'Fat: 15g'],
      mealIdeas: [
        'Overnight oats with fruits',
        'Protein smoothie bowl',
        'Eggs with whole grain toast',
        'Greek yogurt parfait',
      ],
    },
  },
  {
    title: 'Lunch Templates',
    description: 'Balanced and satisfying midday meals to fuel your day.',
    image: 'https://picsum.photos/800/600?random=5',
    details: {
      calories: 600,
      nutrients: ['Protein: 30g', 'Carbs: 60g', 'Fat: 20g'],
      mealIdeas: [
        'Grilled chicken salad',
        'Quinoa Buddha bowl',
        'Tuna wrap with vegetables',
        'Mediterranean plate',
      ],
    },
  },
  {
    title: 'Dinner Templates',
    description: 'Light and nutritious evening meals for better sleep.',
    image: 'https://picsum.photos/800/600?random=6',
    details: {
      calories: 500,
      nutrients: ['Protein: 25g', 'Carbs: 50g', 'Fat: 18g'],
      mealIdeas: [
        'Baked salmon with vegetables',
        'Stir-fried tofu and rice',
        'Turkey meatballs with pasta',
        'Vegetable curry with rice',
      ],
    },
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});
  const [selectedDiet, setSelectedDiet] = useState<DietModel | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<FoodTemplate | null>(null);

  const handleImageError = (imageKey: string) => {
    setImageErrors(prev => ({
      ...prev,
      [imageKey]: true
    }));
  };

  const handleDietClick = (diet: DietModel) => {
    setSelectedDiet(diet);
  };

  const handleTemplateClick = (template: FoodTemplate) => {
    setSelectedTemplate(template);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f7fa' }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
        }}
      >
        <Fade in timeout={1000}>
          <Container maxWidth="md">
            <Typography variant="h2" component="h1" gutterBottom>
              Your Personal Diet Planner
            </Typography>
            <Typography variant="h5" paragraph>
              Achieve your health goals with customized diet plans
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => navigate('/diet-plans')}
              sx={{ mt: 2 }}
            >
              Get Started
            </Button>
          </Container>
        </Fade>
      </Box>

      {/* Popular Diet Models */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
          Popular Diet Models
        </Typography>
        <Grid container spacing={4}>
          {dietModels.map((model, index) => (
            <Grid item xs={12} md={4} key={model.title}>
              <Grow in timeout={1000} style={{ transformOrigin: '0 0 0' }}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                    },
                  }}
                  onClick={() => handleDietClick(model)}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={imageErrors[`diet-${index}`] ? 'https://via.placeholder.com/800x600?text=Healthy+Food' : model.image}
                    alt={model.title}
                    onError={() => handleImageError(`diet-${index}`)}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {model.title}
                    </Typography>
                    <Typography paragraph color="text.secondary">
                      {model.description}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {model.benefits.map((benefit) => (
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
      </Container>

      {/* Meal Templates */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
            Meal Templates
          </Typography>
          <Grid container spacing={4}>
            {foodTemplates.map((template, index) => (
              <Grid item xs={12} md={4} key={template.title}>
                <Slide direction="up" in timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Card
                    sx={{
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                      },
                    }}
                    onClick={() => handleTemplateClick(template)}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={imageErrors[`template-${index}`] ? 'https://via.placeholder.com/800x600?text=Meal+Template' : template.image}
                      alt={template.title}
                      onError={() => handleImageError(`template-${index}`)}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h3">
                        {template.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {template.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
          Why Choose Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
              <RestaurantIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Personalized Plans
              </Typography>
              <Typography color="text.secondary">
                Get diet plans tailored to your specific needs and goals
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
              <LocalDiningIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Expert Guidance
              </Typography>
              <Typography color="text.secondary">
                Backed by nutritionists and health professionals
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
              <FitnessCenterIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Track Progress
              </Typography>
              <Typography color="text.secondary">
                Monitor your journey with our easy-to-use tracking tools
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #3498db 0%, #2c3e50 100%)',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom>
            Ready to Start Your Journey?
          </Typography>
          <Typography variant="h6" paragraph>
            Get your personalized diet plan today and transform your life
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/diet-plans')}
            sx={{ mt: 2 }}
          >
            Create Your Plan
          </Button>
        </Container>
      </Box>

      {/* Diet Details Dialog */}
      <Dialog
        open={!!selectedDiet}
        onClose={() => setSelectedDiet(null)}
        maxWidth="md"
        fullWidth
      >
        {selectedDiet && (
          <>
            <DialogTitle>{selectedDiet.title}</DialogTitle>
            <DialogContent>
              <Typography variant="h6" color="primary" gutterBottom>
                {selectedDiet.details.calories} calories per day
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Daily Meals:
              </Typography>
              <List>
                {selectedDiet.details.meals.map((meal) => (
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
                Tips for Success:
              </Typography>
              <List>
                {selectedDiet.details.tips.map((tip) => (
                  <ListItem key={tip}>
                    <ListItemText primary={tip} />
                  </ListItem>
                ))}
              </List>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelectedDiet(null)}>Close</Button>
              <Button
                variant="contained"
                onClick={() => {
                  setSelectedDiet(null);
                  navigate('/diet-plans');
                }}
              >
                Get Started
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Template Details Dialog */}
      <Dialog
        open={!!selectedTemplate}
        onClose={() => setSelectedTemplate(null)}
        maxWidth="md"
        fullWidth
      >
        {selectedTemplate && (
          <>
            <DialogTitle>{selectedTemplate.title}</DialogTitle>
            <DialogContent>
              <Typography variant="h6" color="primary" gutterBottom>
                {selectedTemplate.details.calories} calories
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Nutrients:
              </Typography>
              <List>
                {selectedTemplate.details.nutrients.map((nutrient) => (
                  <ListItem key={nutrient}>
                    <ListItemText primary={nutrient} />
                  </ListItem>
                ))}
              </List>
              <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                Meal Ideas:
              </Typography>
              <List>
                {selectedTemplate.details.mealIdeas.map((idea) => (
                  <ListItem key={idea}>
                    <ListItemText primary={idea} />
                  </ListItem>
                ))}
              </List>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelectedTemplate(null)}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Home; 