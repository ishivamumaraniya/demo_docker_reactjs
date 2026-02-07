import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import useHabitStore from '../Store/store';

const AddHabitForm = () => {

    const [name, setName] = useState("");
    const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");
    const { habits, addHabit } = useHabitStore();
    console.log(habits)


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {

            addHabit(name, frequency);
            setName("")
            setFrequency("daily")

        }
    }
    console.log(habits)
    return <form onSubmit={handleSubmit}>


        <Box sx={{ display: 'flex', flexDirection: "column", gap: 2 }}>


            <TextField label="Habit Name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Habit Name' fullWidth />


            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={frequency}
                    label="Frequency"
                    onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}
                >
                    <MenuItem value="daily">Daily</MenuItem>
                    <MenuItem value="weekly">Weekly</MenuItem>
                </Select>
            </FormControl>

            <Button type='submit' variant='contained' color='primary'>Add Habit</Button>

        </Box>
    </form>
}

export default AddHabitForm