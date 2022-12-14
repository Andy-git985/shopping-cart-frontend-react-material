import React from 'react';
import { CssBaseline } from '@mui/material';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import OrderSummaryItem from './OrderSummaryItem';
import ShoppingCartItem from './ShoppingCartItem';

export default function ShoppingCart() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={3} style={{ outline: '1px solid red' }}>
          <Grid item xs={12} sm={6} md={7} lg={7}>
            <Grid container>
              <Grid item xs style={{ outline: '1px solid red' }}>
                <ShoppingCartItem />
                <ShoppingCartItem />
                <ShoppingCartItem />
                <ShoppingCartItem />
                <ShoppingCartItem />
                <ShoppingCartItem />
                <ShoppingCartItem />
                <ShoppingCartItem />
                <ShoppingCartItem />
                <ShoppingCartItem />
                <ShoppingCartItem />
                <ShoppingCartItem />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            lg={5}
            style={{ outline: '1px solid red' }}
          >
            <OrderSummaryItem />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
