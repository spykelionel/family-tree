import { Button } from "@components/atoms";
import { Box, Grid, Typography } from "@mui/material";

function Banner({ title, description, showButton = true, onClick }) {
  return (
    <div>
      <Box className="section-head text-white" sx={{ py: "6rem", px: "5rem" }}>
        <Grid display="flex" direction="column" justifyContent="space-evenly">
          <Grid
            item
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={"column"}
            gap={3}
          >
            <Typography variant="h4" component={"h4"} className="font-bold">
              {title}
            </Typography>
            <Box className="max-w-md">{description}</Box>
            {showButton ? (
              <Button type={"primary"} title={title} onClick={onClick} />
            ) : (
              <></>
            )}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Banner;
