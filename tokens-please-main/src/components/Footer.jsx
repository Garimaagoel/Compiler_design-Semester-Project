import { Stack, Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Container>
      <Stack direction="row" justifyContent="center">
        {/* <Button variant="string">
          <Link
            href="https://github.com/axojolotl/tokens-please"
            color="inherit"
            underline="hover"
          >
            {"GitHub"}
          </Link>
        </Button> */}

        <Typography sx={{ margin: "2%" }}>Powered by React</Typography>
      </Stack>
    </Container>
  );
}

export default Footer;
