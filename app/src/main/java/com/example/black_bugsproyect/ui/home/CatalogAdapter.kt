package com.example.black_bugsproyect.ui.home

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.black_bugsproyect.R
import com.example.black_bugsproyect.model.CatalogItem
import com.google.android.material.button.MaterialButton

class CatalogAdapter(
    private val items: List<CatalogItem>,
    private val onAddClick: (CatalogItem) -> Unit
) : RecyclerView.Adapter<CatalogAdapter.VH>() {

    class VH(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val ivThumb: ImageView = itemView.findViewById(R.id.ivThumb)
        val tvName: TextView = itemView.findViewById(R.id.tvName)
        val tvPrice: TextView = itemView.findViewById(R.id.tvPrice)
        val btnBuy: MaterialButton = itemView.findViewById(R.id.btnBuy) // ID debe existir
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): VH {
        val v = LayoutInflater.from(parent.context).inflate(R.layout.item_catalog, parent, false)
        return VH(v)
    }

    override fun onBindViewHolder(holder: VH, position: Int) {
        val item = items[position]
        holder.ivThumb.setImageResource(item.imageRes)
        holder.tvName.text = item.name
        holder.tvPrice.text = "$%.2f".format(item.price)

        holder.btnBuy.setOnClickListener {
            onAddClick(item)
        }
    }

    override fun getItemCount(): Int = items.size
}