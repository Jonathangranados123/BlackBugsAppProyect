package com.example.black_bugsproyect.model


enum class Category { ANIMALES, ALIMENTOS, ACCESORIOS }

data class CatalogItem(
    val id: String,
    val name: String,
    val price: Double,
    val imageRes: Int,
    val category: Category
)