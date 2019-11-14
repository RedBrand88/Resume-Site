from rest_framework import serializers
from resume.models import Resume


class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = ('name', 'phone_number', 'email')
