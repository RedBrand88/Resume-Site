# Generated by Django 2.2.7 on 2019-11-22 18:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('issue_tracker', '0002_sprint'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ticket',
            name='severity',
            field=models.CharField(choices=[('N', 'Normal'), ('L', 'Low'), ('H', 'High'), ('U', 'Urgent')], max_length=6),
        ),
        migrations.AlterField(
            model_name='ticket',
            name='status',
            field=models.CharField(choices=[('Open', 'Open'), ('Closed', 'Closed')], max_length=6),
        ),
    ]
