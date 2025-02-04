import { Stack } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Feed } from "../components/Feed";
import { Rightbar } from "../components/Rightbar";

export function Home() {
    return (
        <>

            <Navbar />
            <Stack direction="row" spacing={2}>
                <Sidebar />
                <Feed />
                <Rightbar />
            </Stack>

        </>
    )
}
