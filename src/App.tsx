import { useState } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import BillingCard from "./components/BillingCard";
import theme from "./theme";
import { plans } from "./data/plans";
import type { Plan } from "./types/Plan";

function App() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: 8 }}>
        <Container>
          <Box textAlign="center" mb={6} sx={{ px: { xs: 1, sm: 0 } }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontSize: { xs: "1.6rem", sm: "2.2rem" },
                fontWeight: 700,
                wordBreak: "break-word",
                lineHeight: 1.2,
              }}
            >
              Pricing Plans
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{
                fontSize: { xs: "0.95rem", sm: "1rem" },
                wordBreak: "break-word",
                lineHeight: 1.4,
                px: { xs: 0.5, sm: 0 },
              }}
            >
              Choose the plan that best fits your needs. Upgrade or downgrade
              anytime.
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center">
            {plans.map((plan: Plan, idx: number) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={plan.planName}>
                <BillingCard
                  {...plan}
                  selected={selected === idx}
                  onSelect={() => setSelected(idx)}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
