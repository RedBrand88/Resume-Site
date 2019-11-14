from rest_framework.generics import RetrieveAPIView
from resume.models import Resume
from .serializers import ResumeSerializer


class ResumeDetailView(RetrieveAPIView):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer
