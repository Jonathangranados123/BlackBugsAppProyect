package com.example.black_bugsproyect

import com.example.black_bugsproyect.data.CartStore
import com.example.black_bugsproyect.model.CatalogItem
import com.example.black_bugsproyect.model.Category
import org.junit.Assert.assertEquals
import org.junit.Before
import org.junit.Test

class CartStoreTest {

    @Before
    fun setup() {
        CartStore.clear()
    }

    @Test
    fun add_increasesCartSize() {
        val item = CatalogItem(
            id = "test1",
            name = "Item Test",
            price = 10.0,
            imageRes = 0,
            category = Category.ANIMALES
        )

        CartStore.add(item)

        assertEquals(1, CartStore.getAll().size)
        assertEquals("Item Test", CartStore.getAll()[0].name)
    }
}