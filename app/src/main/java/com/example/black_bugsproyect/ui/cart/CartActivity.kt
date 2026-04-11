package com.example.black_bugsproyect.ui.cart

import android.os.Bundle
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.black_bugsproyect.R
import com.example.black_bugsproyect.data.CartStore

class CartActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cart)

        val items = CartStore.getAll()

        val rv = findViewById<RecyclerView>(R.id.rvCart)
        rv.layoutManager = LinearLayoutManager(this)
        rv.adapter = CartAdapter(items)

        val total = items.sumOf { it.price }
        findViewById<TextView>(R.id.tvTotal).text = "Total: $%.2f".format(total)
    }
}