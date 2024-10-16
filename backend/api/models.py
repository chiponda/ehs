from django.db import models 
from django.contrib.auth.models import User 


class Incident(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    location= models.CharField(max_length=100 )
    severity= models.CharField(max_length=100 )
    date = models.CharField(max_length=200)
    

    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="incidents")

    def __str__(self):
        return self.title 


class Risk(models.Model):
    
    description = models.CharField(max_length=100 )
    mitigation = models.CharField(max_length=100 )
    location= models.CharField(max_length=100 )
    
   
   
    
    

    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="risks")

    def __str__(self):
        return self.description
