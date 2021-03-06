# Generated by Django 3.2 on 2021-04-22 11:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_productitem_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ordererFirstName', models.CharField(max_length=255)),
                ('ordererLastName', models.CharField(max_length=255)),
                ('ordererAdress', models.CharField(max_length=255)),
                ('ordererPostalCode', models.CharField(max_length=11)),
            ],
            options={
                'verbose_name': 'Order',
                'verbose_name_plural': 'Orders',
            },
        ),
    ]
