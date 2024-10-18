from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Patient


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email","password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user


class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ["id", "id_number", "name","surname","address","dob","email","phone","gender","province" ,"created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}


