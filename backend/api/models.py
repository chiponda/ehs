from django.db import models 
from django.contrib.auth.models import User 


class Patient(models.Model):
    id_number = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    surname= models.CharField(max_length=100 )
    address= models.CharField(max_length=100 )
    dob = models.CharField(max_length=200)
    province= models.CharField(max_length=200)
    email=models.CharField(max_length=200)
    phone=models.CharField(max_length=200)
    gender =models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.id_number


