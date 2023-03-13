import Box from "@mui/system/Box"
import { FC } from "react"

interface Props {
    children: React.ReactNode
}

const Container: FC<Props> = ({ children }) => (
    <Box sx={{ margin: "20px", padding: "20px" }}>
        {children}
    </Box>
)

export default Container