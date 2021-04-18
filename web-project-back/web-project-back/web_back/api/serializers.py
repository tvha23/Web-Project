from rest_framework  import serializers

from api.models import Category, ProductItem


class CategorySerializer(serializers.Serializer):
    id=serializers.IntegerField()
    name=serializers.CharField()

class ProductItemSerializer(serializers.Serializer):
    id=serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.TextField()
    price = serializers.FloatField()
    img=serializers.TextField()

