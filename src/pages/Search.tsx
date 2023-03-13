import { Grid } from "@mui/material"
import MainLayout from "src/layouts/MainLayout";
import SeccionSearch from "src/components/seccionSearch";
import { ReactElement } from "react";


const Search = () => (
    <Grid>
        <SeccionSearch />
    </Grid>
)

Search.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout title="home">{page}</MainLayout>;
};


export default Search