from django.urls import path
from .views import ResumeDetailView

urlpatterns = [
    path('<pk>', ResumeDetailView.as_view()),
]
