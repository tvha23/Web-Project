from django.db import models


class Category(models.Model):
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
    name = models.CharField(max_length=255)
    # description = models.TextField() # Should we include this???


class ProductItem(models.Model):
    class Meta:
        verbose_name = 'Product Item'
        verbose_name_plural = 'Product Items'
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    img=models.TextField()