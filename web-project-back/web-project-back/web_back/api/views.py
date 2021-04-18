from django.shortcuts import render
from django import views
from django.http import JsonResponse

from api.serializers import ProductItemSerializer, CategorySerializer
from api.models import Category, ProductItem


def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        categories_json = [category.to_json() for category in categories]
        return JsonResponse(categories_json, safe=False)
