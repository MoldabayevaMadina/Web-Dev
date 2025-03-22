from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Product, Category

def api(request):
    return HttpResponse("Welcome to the ShopBack API")

def products(request):
    products = Product.objects.all()
    data = {"products": list(products.values())}
    return JsonResponse(data)

def product_by_id(request, id):
    product = Product.objects.get(id=id)
    data = {"product": {
            "name": product.name,
            "price": product.price,
            "description": product.description,
            "count": product.count,
            "is_active": product.is_active,
            "category": product.category.name
        }}
    return JsonResponse(data)

def categories(request):
    categories = Category.objects.all()
    data = {"categories": list(categories.values())}
    return JsonResponse(data)

def category_by_id(request, id):
    category = Category.objects.get(id=id)
    data = {"category": {
            "id": id,
            "name": category.name}
            }
    return JsonResponse(data)

def products_by_category(request, id):
    category = Category.objects.get(id=id)
    products = Product.objects.filter(category=category)
    data = {"products": list(products.values())}
    return JsonResponse(data)
