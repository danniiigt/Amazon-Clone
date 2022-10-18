import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const UnderNavbar = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{
        height: 40,
        boxSizing: "border-box",
        width: "100%",
        backgroundColor: theme.navBarSecondary,
        color: theme.bgText,
        padding: "10px 24px",
        "p:hover": { textDecoration: "underline", cursor: "pointer" },
      }}
    >
      <Stack direction="row" alignItems={"center"} mr={1} spacing={1}>
        <MenuOutlinedIcon fontSize="small" />
        <Typography variant="body2" fontWeight={600}>
          Todo
        </Typography>
      </Stack>

      <Typography variant="body2">Los más vendidos</Typography>
      <Typography variant="body2">Amazon Basics</Typography>
      <Typography variant="body2">Atención al cliente</Typography>
      <Typography variant="body2">Ofertas</Typography>
      <Typography variant="body2">Ultimas novedades</Typography>
      <Typography variant="body2">Música</Typography>
      <Typography
        variant="body2"
        sx={{ display: "flex", alignItems: "flex-start" }}
      >
        Prime
        <ArrowDropDownIcon fontSize="small" />
      </Typography>
      <Typography variant="body2">eBooks Kindle</Typography>
      <Typography variant="body2">Informática</Typography>
      <Typography variant="body2">Libros</Typography>
      <Typography variant="body2">Audible</Typography>
      <Typography variant="body2">Hogar y cocina</Typography>
      <Typography variant="body2">Cheques regalo</Typography>
      <Typography variant="body2">Electrónica y Fotografía</Typography>
      <Typography variant="body2">Moda</Typography>
      <Typography variant="body2">Juguetes y juegos</Typography>
    </Stack>
  );
};
