from django.urls import path
# from .views import product_list, product_detail, category_list, category_detail, category_products
from .views import products, product_by_id, categories, category_by_id, products_by_category

urlpatterns = [
    path('products/', products, name='products'),
    path('products/<int:id>/', product_by_id, name='product_by_id'),
    path('categories/', categories, name='categories'),
    path('categories/<int:id>/', category_by_id, name='category_by_id'),
    path('categories/<int:id>/products/', products_by_category, name='products_by_category'),
]
