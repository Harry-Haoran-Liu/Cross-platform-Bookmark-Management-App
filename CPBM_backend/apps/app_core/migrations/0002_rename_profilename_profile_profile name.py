# Generated by Django 3.2.23 on 2024-05-28 11:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_core', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='profileName',
            new_name='Profile Name',
        ),
    ]
