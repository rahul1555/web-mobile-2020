// Java File for Welcome Page
//Importing the neccessary packages
package com.csee5590.ICP1;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.support.v7.app.AppCompatActivity;

import com.csee5590.helloworldapp.R;

//Java class consisting of a logout button which redirects to login page
public class MainPage extends AppCompatActivity{
    Button LogoutButton;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main_page);
        LogoutButton = findViewById(R.id.button3);
        LogoutButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainPage.this, MainActivity.class);
                startActivity(intent);
            }
        });
    }
}

D