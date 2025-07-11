import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export interface BillingCardProps {
  planName: string;
  price: string;
  features: string[];
  onSelect: () => void;
  buttonLabel?: string;
  selected?: boolean;
}

const BillingCard: React.FC<BillingCardProps> = ({
  planName,
  price,
  features,
  onSelect,
  buttonLabel = "Select Plan",
  selected = false,
}) => {
  return (
    <Card
      role="region"
      aria-label={`${planName} plan`}
      tabIndex={0}
      sx={{
        maxWidth: 360,
        mx: "auto",
        p: 2,
        minHeight: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: selected ? 6 : 2,
        border: selected ? "2px solid" : "1px solid",
        borderColor: selected ? "primary.main" : "grey.300",
        borderRadius: 2,
        transition: "box-shadow 0.2s, border-color 0.2s",
        outline: "none",
        "&:focus": {
          boxShadow: 8,
          borderColor: "primary.main",
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          {planName}
        </Typography>
        <Typography
          variant="h4"
          component="p"
          color="primary"
          sx={{ fontWeight: 700, mb: 2 }}
        >
          {price}
        </Typography>
        <List aria-label={`${planName} features`} dense>
          {features.map((feature, idx) => (
            <ListItem key={idx} disableGutters>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions sx={{ mt: "auto" }}>
        <Button
          fullWidth
          variant={selected ? "contained" : "outlined"}
          color="primary"
          onClick={onSelect}
          aria-pressed={selected}
          aria-label={`Select ${planName} plan`}
        >
          {buttonLabel}
        </Button>
      </CardActions>
    </Card>
  );
};

export default BillingCard;
