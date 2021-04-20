from django.db import models


class Category(models.Model):
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
    
    name = models.CharField(max_length=255)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

    def __str__(self):
        return self.name


class ProductItem(models.Model):
    class Meta:
        verbose_name = 'Product Item'
        verbose_name_plural = 'Product Items'

    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    img = models.TextField()
    category = models.ForeignKey(Category, null=True, on_delete=models.SET_NULL, blank=True)
    def __str__(self):
        return self.name
