from django.urls import path
from . import views

urlpatterns = [
    path("risks/", views.RiskCreate.as_view(), name="risks"),

      path("incidents/", views.IncidentCreate.as_view(), name="incidents"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
]
