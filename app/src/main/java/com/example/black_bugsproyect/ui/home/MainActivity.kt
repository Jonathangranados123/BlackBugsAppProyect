package com.example.black_bugsproyect.ui.home
import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.black_bugsproyect.R
import com.example.black_bugsproyect.ui.cart.CartActivity
import com.example.black_bugsproyect.ui.contact.ContactActivity
import com.example.black_bugsproyect.ui.stock.StockActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.black_bugsproyect.data.CartStore
import com.example.black_bugsproyect.data.FakeCatalog

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home)


        val rv = findViewById<RecyclerView>(R.id.rvCatalog)
        rv.layoutManager = LinearLayoutManager(this)
        rv.adapter = CatalogAdapter(FakeCatalog.items) { item ->
            CartStore.add(item)
            android.widget.Toast.makeText(this, "✅ Agregado: ${item.name}", android.widget.Toast.LENGTH_SHORT).show()
        }

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