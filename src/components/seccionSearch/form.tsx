import { FormControl, FormControlLabel, IconButton, Input, InputAdornment, InputLabel, Radio, RadioGroup } from "@mui/material"
import { ChangeEvent, FC, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

interface Props {
    search: (text: string, checkbox: string) => void;
}

const Form: FC<Props> = ({ search }) => {
    const [checkBox, setCheckBox] = useState("name");
    const [text, setText] = useState("");
    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCheckBox((event.target.value));
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText((event.target.value));
    };

    return (
        <>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type="text"
                    value={text}
                    onChange={handleInputChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => search(text, checkBox)}
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={checkBox}
                    onChange={handleRadioChange}
                >
                    <FormControlLabel value="type" control={<Radio />} label="Tipo" />
                    <FormControlLabel value="name" control={<Radio />} label="Nombre/id" />
                </RadioGroup>
            </FormControl>
        </>
    )
}

export default Form