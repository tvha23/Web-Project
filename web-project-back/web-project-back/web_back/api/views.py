from django.shortcuts import render
from django import views
from django.http import JsonResponse

from api.serializers import ProductItemSerializer, CategorySerializer
from api.models import Category, ProductItem


def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer=CategorySerializer(categories, many=True)
        # categories_json = [category.to_json() for category in categories]
        return JsonResponse(serializer.data, safe=False)

def product_list(request):
    if request.method == 'GET':
        products=ProductItem.objects.all()
        serializer=ProductItemSerializer(products, many=True)
    return JsonResponse(serializer.data, safe=False)
