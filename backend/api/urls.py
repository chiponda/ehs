from django.urls import path
from . import views

urlpatterns = [
   
      path("add_id/", views.PatientCreate.as_view(), name="patients"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
]
