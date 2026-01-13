import {useParams, Link} from "react-router-dom";
import {Box, Container, Typography} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {getArticleById} from "../api/article";
import {useQuery} from "../hooks/useQuery.ts";
import Loader from "../comonents/loader.tsx";

const ArticlePage = () => {
    const {id} = useParams()
    const {data, error, isLoading} = useQuery(getArticleById.bind(null, Number(id)));

    if (isLoading) {
        return <Loader/>;
    }

    if (error) {
        return <Typography textAlign="center" mt="50px">An error occurred while fetching the article.</Typography>;
    }

    return (
        <>
            <Box sx={{
                width: "100%",
                height: "250px",
                background: `url(${data?.image_url}) center/cover no-repeat`,
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -1
            }}/>
            <Container sx={{
                minHeight: "80dvh",
                mt: "150px",
                pt: "35px",
                pb: "50px",
                px: "75px",
                "@media (max-width: 600px)": {
                    px: "25px",
                },
                "@media (min-width: 800px)": {
                    px: "70px",
                },
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: '0px 8px 24px #0000000D'
            }}>
                <Typography variant="h5" textAlign="center" mb="50px">{data?.title}</Typography>
                <Typography fontSize="18px" lineHeight="28px">
                    {data?.summary}
                </Typography>
            </Container>
            <Container sx={{my: "35px"}}>
                <Link to="/" style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                }}>
                    <ArrowBackIcon/> Back to homepage
                </Link>
            </Container>
        </>
    );
};

export default ArticlePage;