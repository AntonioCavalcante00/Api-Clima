import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function Search({ onclick, onchage, city }) {
    return (
        <Paper
            component="form"
            sx={{ p: '3px', display: 'flex', alignItems: 'center', width: 250 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Nome da Cidade"
                inputProps={{ 'aria-label': 'Search Climate' }}
                type='text'
                onChange={onchage}
                value={city}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type='button' onClick={onclick} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}