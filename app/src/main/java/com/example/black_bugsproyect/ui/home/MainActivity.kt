package com.example.black_bugsproyect.ui.home
import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.black_bugsproyect.R
import com.example.black_bugsproyect.ui.cart.CartActivity
import com.example.black_bugsproyect.ui.contact.ContactActivity
import com.example.black_bugsproyect.ui.stock.StockActivity

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home)

        findViewById<android.view.View?>(R.id.btnGoStock)?.setOnClickListener {
            startActivity(Intent(this, StockActivity::class.java))
        }

        findViewById<android.view.View?>(R.id.btnGoCart)?.setOnClickListener {
            startActivity(Intent(this, CartActivity::class.java))
        }

        findViewById<android.view.View?>(R.id.btnGoContact)?.setOnClickListener {
            startActivity(Intent(this, ContactActivity::class.java))
        }
    }
}