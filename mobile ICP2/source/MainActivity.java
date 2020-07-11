package com.example.pizzaapplication;
import android.content.Intent;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

import android.view.View;



// Home Activity to show Two Order Buttons.
public class MainActivity extends AppCompatActivity{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }


    // On Click of Order Pizza
    public void orderPizza(View view) {
        Intent intent = new Intent(MainActivity.this, Order.class);
        startActivity(intent);
    }

}