from rest_framework  import serializers

from api.models import Category, ProductItem


class CategorySerializer(serializers.Serializer):
    id=serializers.IntegerField(read_only=True)
    name=serializers.CharField()

class ProductItemSerializer(serializers.Serializer):
    id=serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.TextField()
    price = serializers.FloatField()
    img=models.TextField()
