package com.example.black_bugsproyect.data

import com.example.black_bugsproyect.model.CatalogItem

object CartStore {
    private val items = mutableListOf<CatalogItem>()

    fun add(item: CatalogItem) {
        items.add(item)
    }

    fun getAll(): List<CatalogItem> = items.toList()

    fun clear() { items.clear() }
}