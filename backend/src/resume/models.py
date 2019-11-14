from django.db import models


class Resume(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField()
    phone_number = models.CharField(max_length=12)

    def __str__(self):
        return self.name
