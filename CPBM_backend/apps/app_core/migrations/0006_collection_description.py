# Generated by Django 3.2.23 on 2024-07-04 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_core', '0005_auto_20240630_2151'),
    ]

    operations = [
        migrations.AddField(
            model_name='collection',
            name='description',
            field=models.TextField(default='No description'),
        ),
    ]
