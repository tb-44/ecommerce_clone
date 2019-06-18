SELECT * FROM products
JOIN product_views
ON products.product_id = product_views.product_id
WHERE products.product_id = $1;