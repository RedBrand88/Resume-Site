from django.db import models


class Resume(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField()
    phone_number = models.CharField(max_length=12)
    address = models.TextField()


    def __str__(self):
        return self.first_name
