from django.urls import path

from api.views import category_list

urlpatterns = [
    path('categories/', category_list),
]