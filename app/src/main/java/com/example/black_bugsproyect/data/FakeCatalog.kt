package com.example.black_bugsproyect.data


import com.example.black_bugsproyect.R
import com.example.black_bugsproyect.model.CatalogItem
import com.example.black_bugsproyect.model.Category

object FakeCatalog {
    val items = listOf(
        // ANIMALES
        CatalogItem("discoidalis", "Cucaracha Discoidalis", 120.0, R.drawable.cucaracha_discoidalis, Category.ANIMALES),
        CatalogItem("dubia", "Cucaracha Dubia", 150.0, R.drawable.cucaracha_dubia, Category.ANIMALES),
        CatalogItem("lobster", "Cucaracha Lobster", 110.0, R.drawable.cucaracha_lobster, Category.ANIMALES),
        CatalogItem("madagascar", "Cucaracha Madagascar", 200.0, R.drawable.cucaracha_madagascar, Category.ANIMALES),
        CatalogItem("runner", "Cucaracha Runner", 140.0, R.drawable.cucaracha_runner, Category.ANIMALES),

        // ALIMENTOS
        CatalogItem("grillos", "Grillos", 90.0, R.drawable.grillos, Category.ALIMENTOS),
        // Ejemplos (cambia por tus imágenes reales):
        // CatalogItem("tenebrios", "Tenebrios", 80.0, R.drawable.tenebrios, Category.ALIMENTOS),
        // CatalogItem("calcio", "Calcio para reptiles", 75.0, R.drawable.alimento_calcio, Category.ALIMENTOS),

        // ACCESORIOS
        // Ejemplos (cambia por tus imágenes reales):
        // CatalogItem("pinzas", "Pinzas para alimento vivo", 60.0, R.drawable.pinzas, Category.ACCESORIOS),
        // CatalogItem("terrario", "Terrario chico", 350.0, R.drawable.terrario, Category.ACCESORIOS),
    )
}