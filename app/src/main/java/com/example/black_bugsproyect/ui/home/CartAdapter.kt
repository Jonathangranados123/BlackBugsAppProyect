package com.example.black_bugsproyect.ui.cart

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.black_bugsproyect.R
import com.example.black_bugsproyect.model.CatalogItem

class CartAdapter(private val items: List<CatalogItem>) : RecyclerView.Adapter<CartAdapter.VH>() {
    class VH(v: View) : RecyclerView.ViewHolder(v) {
        val img: ImageView = v.findViewById(R.id.ivThumb)
        val name: TextView = v.findViewById(R.id.tvName)
        val price: TextView = v.findViewById(R.id.tvPrice)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): VH {
        val v = LayoutInflater.from(parent.context).inflate(R.layout.item_catalog, parent, false)
        // OJO: item_catalog tiene botón; lo ocultamos en onBind.
        return VH(v)
    }

    override fun onBindViewHolder(holder: VH, position: Int) {
        val item = items[position]
        holder.img.setImageResource(item.imageRes)
        holder.name.text = item.name
        holder.price.text = "$%.2f".format(item.price)
        holder.itemView.findViewById<View>(R.id.btnBuy).visibility = View.GONE
    }

    override fun getItemCount() = items.size
}