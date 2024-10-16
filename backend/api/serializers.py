from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Incident,Risk


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user


class IncidentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incident
        fields = ["id", "title", "description","location","severity","date" ,"created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}


class RiskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Risk
        fields = ["id", "description","mitigation","location","created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}
