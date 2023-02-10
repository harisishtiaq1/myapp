import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'

function AddressForm() {
  return (
    <React.Fragment>
        <Typography variant='h5' component="h1">
            Shipping Address
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                label="First name"
                id="firstname"
                name="firstname"
                variant='standard'
                required
                fullWidth>
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                label="Last name"
                id="lastname"
                name="lastname"
                variant='standard'
                required
                fullWidth>
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField
                label="Address Line 1"
                id="Address"
                name="Address"
                variant='standard'
                required
                fullWidth>
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField
                label="Address Line 2"
                id="Address1"
                name="Address1"
                variant='standard'
                required
                fullWidth>
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                label="City"
                id="City"
                name="City"
                variant='standard'
                required
                fullWidth>
                </TextField>
            </Grid> 
            <Grid item xs={12} sm={6}>
                <TextField
                label="State/Province/Region"
                id="state"
                name="state"
                variant='standard'
                required
                fullWidth>
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                label="Zip/PostalCode"
                id="zip"
                name="zip"
                variant='standard'
                required
                fullWidth>
                </TextField>
            </Grid> 
            <Grid item xs={12} sm={6}>
                <TextField
                label="Country"
                id="country"
                name="country"
                variant='standard'
                required
                fullWidth>
                </TextField>
            </Grid>  
        </Grid>
    </React.Fragment>
    
  )
}

export default AddressForm