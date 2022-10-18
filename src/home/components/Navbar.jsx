import {
  AppBar,
  Toolbar,
  TextField,
  Select,
  MenuItem,
  Button,
  Stack,
  Box,
  Typography,
  Badge,
} from "@mui/material";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

export const NavBar = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <>
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: theme.navbarPrimary,
          color: theme.bgText,
          height: 65,
          boxSizing: "border-box",
        }}
      >
        <Toolbar>
          <Stack
            spacing={6}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Stack direction="row" spacing={2}>
              <img
                src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-Transparent-1024x310.png"
                style={{ maxWidth: 95, objectFit: "contain", marginTop: 5 }}
              />

              <Box sx={{ cursor: "pointer" }}>
                <Typography variant="body2" ml={2}>
                  Hola
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FmdGoodOutlinedIcon fontSize="small" />
                  Elige tu direccion
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" sx={{ height: 40, flexGrow: 1 }}>
              <Select
                value="all"
                sx={{
                  backgroundColor: theme.bgSecondary,
                  borderRadius: "3px 0 0 3px",
                }}
              >
                <MenuItem value="all">Todos los departamentos</MenuItem>
              </Select>
              <TextField
                color="primary"
                fullWidth
                autoComplete="off"
                size="small"
                sx={{
                  boxSizing: "border-box",
                  height: "100%",
                  input: { backgroundColor: theme.bgSecondary },
                  fieldset: { borderRadius: 0 },
                }}
              />
              <Button
                sx={{
                  height: "100%",
                  borderRadius: "0 3px 3px 0",
                  padding: "6px 0px",
                  minWidth: "50px",
                }}
                variant="contained"
                color="primary"
              >
                <SearchIcon />
              </Button>
            </Stack>

            <Stack direction="row" spacing={3.5} alignItems="center">
              <Box sx={{ cursor: "pointer" }}>
                <Typography variant="body2">Castellano</Typography>
                <Stack direction="row" justifyContent="center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Bandera_Nacional_de_Espa%C3%B1a_sin_escudo.png/1200px-Bandera_Nacional_de_Espa%C3%B1a_sin_escudo.png"
                    style={{ maxWidth: 20, objectFit: "contain" }}
                    alt=""
                  />
                  <ArrowDropDownIcon fontSize="small" />
                </Stack>
              </Box>

              <Box sx={{ cursor: "pointer" }}>
                <Typography variant="body2">Hola, identifícate</Typography>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  sx={{ display: "flex" }}
                >
                  Cuenta y listas
                  <ArrowDropDownIcon fontSize="small" />
                </Typography>
              </Box>

              <Box sx={{ cursor: "pointer" }}>
                <Typography variant="body2">Devoluciones</Typography>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  sx={{ display: "flex" }}
                >
                  y pedidos
                  <ArrowDropDownIcon fontSize="small" />
                </Typography>
              </Box>

              <Stack
                direction="row"
                alignItems="flex-end"
                sx={{ cursor: "pointer" }}
              >
                <Badge badgeContent={3} color="primary">
                  <ShoppingCartOutlinedIcon fontSize="large" />
                </Badge>
                <Typography variant="body2" fontWeight={600}>
                  Cesta
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
